import {
  componentCategories,
  getComponentCategory,
  getComponentCategoryLabel,
} from "@/data/category-rules";
import { inventory } from "@/data/inventory";

describe("getComponentCategory", () => {
  it("clasifica los 165 componentes en las diez categorías", () => {
    const counts = new Map(componentCategories.map(({ value }) => [value, 0]));

    for (const component of inventory.components) {
      expect(counts.has(component.category)).toBe(true);
      counts.set(component.category, (counts.get(component.category) ?? 0) + 1);
      expect(getComponentCategoryLabel(component.category)).toBeTruthy();
    }

    expect([...counts.values()].every((count) => count > 0)).toBe(true);
    expect([...counts.values()].reduce((sum, count) => sum + count, 0)).toBe(
      165,
    );
  });

  it("aplica las excepciones manuales", () => {
    expect(getComponentCategory("Hélice para motor")).toBe(
      "accessories-mounting",
    );
    expect(getComponentCategory("Módulo sensor táctil capacitivo")).toBe(
      "input-control",
    );
    expect(getComponentCategory("Conector con cable para batería de 9 V")).toBe(
      "cables-connectors",
    );
    expect(
      getComponentCategory("Conjunto RFID MFRC522 con lector, tarjeta y llavero"),
    ).toBe("communication");
  });

  it("detecta nombres sin categoría", () => {
    expect(() => getComponentCategory("Objeto totalmente desconocido 123")).toThrow();
  });
});