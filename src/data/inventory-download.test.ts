import {
  createInventoryJsonBlob,
  createInventoryJsonText,
  INVENTORY_JSON_FILE_NAME,
} from "@/data/inventory-download";

describe("descarga del inventario", () => {
  it("genera un JSON válido con todos los productos", () => {
    const text = createInventoryJsonText();
    const parsed = JSON.parse(text) as { products: unknown[] };

    expect(text.endsWith("\n")).toBe(true);
    expect(parsed.products).toHaveLength(8);
  });

  it("crea un blob descargable con el nombre esperado", () => {
    const blob = createInventoryJsonBlob();

    expect(blob.type).toBe("application/json;charset=utf-8");
    expect(blob.size).toBeGreaterThan(0);
    expect(INVENTORY_JSON_FILE_NAME).toBe("inventario_componentes.json");
  });
});
