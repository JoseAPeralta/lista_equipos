import inventoryJson from "../../inventario_componentes.json";

export const INVENTORY_JSON_FILE_NAME = "inventario_componentes.json";

export function createInventoryJsonText(): string {
  return `${JSON.stringify(inventoryJson, null, 2)}\n`;
}

export function createInventoryJsonBlob(): Blob {
  return new Blob([createInventoryJsonText()], {
    type: "application/json;charset=utf-8",
  });
}

export function downloadInventoryJson(): void {
  const url = URL.createObjectURL(createInventoryJsonBlob());
  const link = document.createElement("a");

  link.href = url;
  link.download = INVENTORY_JSON_FILE_NAME;
  document.body.append(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
