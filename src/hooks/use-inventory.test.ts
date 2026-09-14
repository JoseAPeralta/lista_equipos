import { inventory } from "@/data/inventory";
import {
  clampPage,
  createInitialInventoryQueryState,
  filterInventoryComponents,
  getTotalPages,
  inventoryQueryReducer,
  normalizeSearchText,
  paginateInventoryComponents,
} from "@/hooks/use-inventory";

const all = inventory.components;
const emptyFilters = {
  search: "",
  category: null,
  platform: null,
  includeAdapted: false,
};

describe("filterInventoryComponents", () => {
  it("sin filtros conserva los 165 componentes ordenados", () => {
    const result = filterInventoryComponents(all, emptyFilters);
    expect(result.length).toBe(165);
    expect(result[0].name.spanish).toBe("Adaptador Mini-HDMI a HDMI");
  });

  it("ignora mayúsculas y acentos en la búsqueda", () => {
    const result = filterInventoryComponents(all, {
      ...emptyFilters,
      search: "MODULO TACTIL",
    });
    expect(
      result.some(({ name }) => name.spanish === "Módulo sensor táctil capacitivo"),
    ).toBe(true);
  });

  it("busca en nombres ingleses y descripciones", () => {
    const byEnglish = filterInventoryComponents(all, {
      ...emptyFilters,
      search: "servo",
    });
    expect(byEnglish.length).toBeGreaterThan(0);
    expect(
      byEnglish.every(({ name }) =>
        [name.spanish, name.english, ...name.englishAliases].some((value) =>
          normalizeSearchText(value).includes("servo"),
        ),
      ),
    ).toBe(true);
  });

  it("filtra por categoría", () => {
    const sensors = filterInventoryComponents(all, {
      ...emptyFilters,
      category: "sensor",
    });
    expect(sensors.length).toBe(37);
    expect(sensors.every(({ category }) => category === "sensor")).toBe(true);
  });

  it("filtra compatibilidad directa y con adaptación", () => {
    const direct = filterInventoryComponents(all, {
      ...emptyFilters,
      platform: "ESP32-DevKitC-32",
    });
    const adapted = filterInventoryComponents(all, {
      ...emptyFilters,
      platform: "ESP32-DevKitC-32",
      includeAdapted: true,
    });

    expect(direct.length).toBe(82);
    expect(adapted.length).toBe(145);
    expect(
      direct.every(({ compatibility }) =>
        compatibility.some(
          (entry) =>
            entry.platform === "ESP32-DevKitC-32" && entry.compatible === "sí",
        ),
      ),
    ).toBe(true);
    expect(adapted.length).toBeGreaterThan(direct.length);
  });

  it("excluye no y no aplica cuando hay plataforma activa", () => {
    const adapted = filterInventoryComponents(all, {
      ...emptyFilters,
      platform: "Arduino Nano V3.0",
      includeAdapted: true,
    });
    expect(
      adapted.every(({ compatibility }) => {
        const entry = compatibility.find(
          ({ platform }) => platform === "Arduino Nano V3.0",
        );
        return (
          entry?.compatible === "sí" ||
          entry?.compatible === "sí, con adaptación"
        );
      }),
    ).toBe(true);
  });

  it("normaliza el texto de búsqueda", () => {
    expect(normalizeSearchText("  MÓDULO  táctil  ")).toBe("modulo tactil");
  });
});

describe("paginación", () => {
  it("calcula totales y segmentos", () => {
    expect(getTotalPages(165, 12)).toBe(14);
    expect(paginateInventoryComponents(all, 1, 12).length).toBe(12);
    expect(paginateInventoryComponents(all, 14, 12).length).toBe(9);
  });

  it("limita páginas fuera de rango y normaliza NaN", () => {
    expect(clampPage(99, 14)).toBe(14);
    expect(clampPage(0, 14)).toBe(1);
    expect(clampPage(Number.NaN, 14)).toBe(1);
    expect(paginateInventoryComponents(all, Number.NaN, 12).length).toBe(12);
  });
});

describe("inventoryQueryReducer", () => {
  it("reinicia la página al cambiar filtros o tamaño", () => {
    let state = createInitialInventoryQueryState();
    state = inventoryQueryReducer(state, { type: "page-changed", value: 5 });
    state = inventoryQueryReducer(state, {
      type: "category-changed",
      value: "sensor",
    });
    expect(state.page).toBe(1);

    state = inventoryQueryReducer(state, { type: "page-changed", value: 4 });
    state = inventoryQueryReducer(state, { type: "page-size-changed", value: 24 });
    expect(state.page).toBe(1);
    expect(state.pageSize).toBe(24);
  });

  it("desactiva la adaptación al quitar la plataforma", () => {
    let state = createInitialInventoryQueryState();
    state = inventoryQueryReducer(state, {
      type: "platform-changed",
      value: "ESP32-DevKitC-32",
    });
    state = inventoryQueryReducer(state, {
      type: "include-adapted-changed",
      value: true,
    });
    expect(state.includeAdapted).toBe(true);

    state = inventoryQueryReducer(state, { type: "platform-changed", value: null });
    expect(state.includeAdapted).toBe(false);
  });

  it("normaliza páginas NaN", () => {
    const state = inventoryQueryReducer(createInitialInventoryQueryState(), {
      type: "page-changed",
      value: Number.NaN,
    });
    expect(state.page).toBe(1);
  });

  it("conserva el tamaño de página al limpiar filtros", () => {
    let state = createInitialInventoryQueryState();
    state = inventoryQueryReducer(state, { type: "page-size-changed", value: 48 });
    state = inventoryQueryReducer(state, {
      type: "search-changed",
      value: "led",
    });
    state = inventoryQueryReducer(state, { type: "filters-reset" });
    expect(state.pageSize).toBe(48);
    expect(state.search).toBe("");
  });
});