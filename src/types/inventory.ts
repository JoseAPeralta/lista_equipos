export type InventoryProductType = "kit" | "individual";

export type CompatibilityPlatform =
  | "Arduino Nano V3.0"
  | "ESP32-DevKitC-32"
  | "Raspberry Pi Zero 2 W";

export type CompatibilityStatus =
  | "sí"
  | "sí, con adaptación"
  | "no"
  | "no aplica";

export type ComponentCategory =
  | "sensor"
  | "actuator"
  | "development-board"
  | "display"
  | "input-control"
  | "communication"
  | "basic-electronics"
  | "power"
  | "cables-connectors"
  | "accessories-mounting";

export interface LocalizedName {
  spanish: string;
  english: string;
}

export interface ComponentCompatibility {
  platform: CompatibilityPlatform;
  compatible: CompatibilityStatus;
  considerations: string;
}

export interface RawInventoryComponent {
  name: LocalizedName;
  amount: number;
  description: string;
  compatibility: ComponentCompatibility[];
}

export interface RawInventoryProduct {
  type: InventoryProductType;
  name: LocalizedName;
  brand: string;
  model?: string;
  asin: string;
  amazon_short_url: string;
  purchased_amount: number;
  manufacturer_marketed_item_count?: number;
  content: RawInventoryComponent[];
  sources: string[];
}

export interface RawInventory {
  schema_version: string;
  generated_on: string;
  updated_on: string;
  amount_basis: string;
  compatibility_targets: CompatibilityPlatform[];
  compatibility_status_values: CompatibilityStatus[];
  name_definition: string;
  compatibility_definition: string;
  compatibility_sources: string[];
  terminology_sources: string[];
  notes: string[];
  products: RawInventoryProduct[];
}

export interface InventoryComponentName extends LocalizedName {
  englishAliases: string[];
}

export interface InventoryComponentSource {
  name: string;
  brand: string;
  type: InventoryProductType;
  model?: string;
}

export interface InventoryComponentImage {
  src: string;
  alt: string;
}

export interface InventoryComponent {
  id: string;
  name: InventoryComponentName;
  category: ComponentCategory;
  amount: number;
  description: string;
  compatibility: ComponentCompatibility[];
  sourceProducts: InventoryComponentSource[];
  image?: InventoryComponentImage;
}

export interface InventoryMetadata {
  schemaVersion: string;
  generatedOn: string;
  updatedOn: string;
  amountBasis: string;
  platforms: CompatibilityPlatform[];
  compatibilityStatuses: CompatibilityStatus[];
  productCount: number;
  componentLineCount: number;
  uniqueComponentCount: number;
  repeatedNameCount: number;
  totalUnits: number;
  notes: string[];
}

export interface NormalizedInventory {
  metadata: InventoryMetadata;
  components: InventoryComponent[];
}
