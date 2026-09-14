import inventoryJson from "../../inventario_componentes.json";
import {
  inventory,
  normalizeInventory,
} from "@/data/inventory";
import type { RawInventory } from "@/types/inventory";

describe("normalizeInventory", () => {
  it("deduplica por nombre español y suma cantidades", () => {
    expect(inventory.metadata.productCount).toBe(8);
    expect(inventory.metadata.componentLineCount).toBe(207);
    expect(inventory.metadata.uniqueComponentCount).toBe(165);
    expect(inventory.metadata.repeatedNameCount).toBe(38);
    expect(inventory.metadata.totalUnits).toBe(1044);
  });

  it("genera identificadores únicos y legibles", () => {
    const ids = new Set(inventory.components.map(({ id }) => id));
    expect(ids.size).toBe(inventory.components.length);
    expect(
      inventory.components.every(({ id }) => /^[a-z0-9-]+$/.test(id)),
    ).toBe(true);
  });

  it("acumula todos los productos de origen y suma sus cantidades", () => {
    const resistor = inventory.components.find(
      ({ name }) => name.spanish === "Resistencia de 220 Ω",
    );
    expect(resistor).toBeDefined();
    expect(resistor!.amount).toBe(50);
    expect(resistor!.sourceProducts.length).toBe(2);
  });

  it("conserva variantes de nombre inglés como alias", () => {
    const aliased = inventory.components.filter(
      ({ name }) => name.englishAliases.length > 0,
    );
    expect(aliased.length).toBe(3);
  });

  it("respeta la semántica del JSON para plataformas y estados", () => {
    expect(inventory.metadata.platforms).toEqual([
      "Arduino Nano V3.0",
      "ESP32-DevKitC-32",
      "Raspberry Pi Zero 2 W",
    ]);
    for (const component of inventory.components) {
      expect(component.compatibility).toHaveLength(3);
    }
  });

  it("rechaza un vocabulario de compatibilidad inválido", () => {
    const raw = JSON.parse(
      JSON.stringify(inventoryJson),
    ) as RawInventory;
    (raw.compatibility_status_values as string[])[0] = "si";
    for (const product of raw.products) {
      for (const component of product.content) {
        for (const entry of component.compatibility) {
          if (entry.compatible === "sí") {
            (entry.compatible as string) = "si";
          }
        }
      }
    }
    expect(() => normalizeInventory(raw)).toThrow();
  });
});