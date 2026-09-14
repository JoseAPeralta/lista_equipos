import inventoryJson from "../../inventario_componentes.json";
import { getComponentCategory } from "@/data/category-rules";
import { getComponentImage } from "@/data/component-images";
import type {
  CompatibilityPlatform,
  CompatibilityStatus,
  ComponentCompatibility,
  InventoryComponent,
  InventoryComponentSource,
  NormalizedInventory,
  RawInventory,
  RawInventoryProduct,
} from "@/types/inventory";

const supportedPlatforms = [
  "Arduino Nano V3.0",
  "ESP32-DevKitC-32",
  "Raspberry Pi Zero 2 W",
] as const satisfies readonly CompatibilityPlatform[];

const supportedCompatibilityStatuses = [
  "sí",
  "sí, con adaptación",
  "no",
  "no aplica",
] as const satisfies readonly CompatibilityStatus[];

interface ComponentAccumulator {
  component: InventoryComponent;
  englishNames: Map<string, string>;
  sourceProducts: Map<string, InventoryComponentSource>;
  occurrenceCount: number;
}

function normalizeWhitespace(value: string): string {
  return value.trim().replace(/\s+/gu, " ");
}

export function normalizeComponentKey(name: string): string {
  return normalizeWhitespace(name).normalize("NFC").toLocaleLowerCase("es");
}

export function createComponentId(name: string): string {
  const id = normalizeWhitespace(name)
    .replace(/[ΩΩ]/gu, " ohm ")
    .replace(/[µμ]/gu, "u")
    .replace(/×/gu, "x")
    .normalize("NFKD")
    .replace(/\p{Mark}/gu, "")
    .toLocaleLowerCase("es")
    .replace(/[^a-z0-9]+/gu, "-")
    .replace(/^-+|-+$/gu, "");

  if (!id) {
    throw new Error(`No se pudo generar un identificador para "${name}".`);
  }

  return id;
}

function createSourceProduct(
  product: RawInventoryProduct,
): InventoryComponentSource {
  return {
    name: normalizeWhitespace(product.name.spanish),
    brand: normalizeWhitespace(product.brand),
    type: product.type,
    ...(product.model
      ? { model: normalizeWhitespace(product.model) }
      : undefined),
  };
}

function compatibilitySignature(
  compatibility: ComponentCompatibility[],
): string {
  return [...compatibility]
    .sort((left, right) => left.platform.localeCompare(right.platform, "es"))
    .map(
      ({ platform, compatible, considerations }) =>
        `${platform}\u0000${compatible}\u0000${considerations}`,
    )
    .join("\u0001");
}

function validateRawInventory(rawInventory: RawInventory): void {
  const hasSupportedPlatforms =
    rawInventory.compatibility_targets.length === supportedPlatforms.length &&
    supportedPlatforms.every((platform) =>
      rawInventory.compatibility_targets.includes(platform),
    );
  const hasSupportedStatuses =
    rawInventory.compatibility_status_values.length ===
      supportedCompatibilityStatuses.length &&
    supportedCompatibilityStatuses.every((status) =>
      rawInventory.compatibility_status_values.includes(status),
    );

  if (!hasSupportedPlatforms) {
    throw new Error("El inventario declara plataformas no compatibles con la aplicación.");
  }

  if (!hasSupportedStatuses) {
    throw new Error("El inventario declara estados de compatibilidad no admitidos.");
  }

  const platforms = new Set(rawInventory.compatibility_targets);
  const statuses = new Set(rawInventory.compatibility_status_values);

  if (platforms.size !== rawInventory.compatibility_targets.length) {
    throw new Error("El inventario contiene plataformas de compatibilidad repetidas.");
  }

  for (const product of rawInventory.products) {
    for (const component of product.content) {
      const componentName = normalizeWhitespace(component.name.spanish);

      if (!componentName || !normalizeWhitespace(component.name.english)) {
        throw new Error("Todos los componentes deben tener nombre en español e inglés.");
      }

      if (!Number.isInteger(component.amount) || component.amount <= 0) {
        throw new Error(
          `La cantidad de "${componentName}" debe ser un entero positivo.`,
        );
      }

      if (component.compatibility.length !== platforms.size) {
        throw new Error(
          `"${componentName}" debe evaluar exactamente ${platforms.size} plataformas.`,
        );
      }

      const componentPlatforms = new Set<string>();

      for (const compatibility of component.compatibility) {
        if (!platforms.has(compatibility.platform)) {
          throw new Error(
            `"${componentName}" contiene una plataforma no declarada: ${compatibility.platform}.`,
          );
        }

        if (componentPlatforms.has(compatibility.platform)) {
          throw new Error(
            `"${componentName}" repite la plataforma ${compatibility.platform}.`,
          );
        }

        if (!statuses.has(compatibility.compatible)) {
          throw new Error(
            `"${componentName}" contiene un estado de compatibilidad no declarado.`,
          );
        }

        componentPlatforms.add(compatibility.platform);
      }
    }
  }
}

export function normalizeInventory(rawInventory: RawInventory): NormalizedInventory {
  validateRawInventory(rawInventory);

  const componentsByName = new Map<string, ComponentAccumulator>();
  let componentLineCount = 0;
  let rawTotalUnits = 0;

  for (const product of rawInventory.products) {
    const sourceProduct = createSourceProduct(product);
    const sourceKey = normalizeComponentKey(sourceProduct.name);

    for (const rawComponent of product.content) {
      componentLineCount += 1;
      rawTotalUnits += rawComponent.amount;

      const spanishName = normalizeWhitespace(rawComponent.name.spanish);
      const englishName = normalizeWhitespace(rawComponent.name.english);
      const componentKey = normalizeComponentKey(spanishName);
      const englishKey = normalizeComponentKey(englishName);
      const existing = componentsByName.get(componentKey);

      if (!existing) {
        componentsByName.set(componentKey, {
          component: {
            id: createComponentId(spanishName),
            name: {
              spanish: spanishName,
              english: englishName,
              englishAliases: [],
            },
            category: getComponentCategory(spanishName),
            amount: rawComponent.amount,
            description: normalizeWhitespace(rawComponent.description),
            compatibility: rawComponent.compatibility.map((entry) => ({
              ...entry,
              considerations: normalizeWhitespace(entry.considerations),
            })),
            sourceProducts: [],
          },
          englishNames: new Map([[englishKey, englishName]]),
          sourceProducts: new Map([[sourceKey, sourceProduct]]),
          occurrenceCount: 1,
        });
        continue;
      }

      const description = normalizeWhitespace(rawComponent.description);
      const compatibility = rawComponent.compatibility.map((entry) => ({
        ...entry,
        considerations: normalizeWhitespace(entry.considerations),
      }));

      if (existing.component.description !== description) {
        throw new Error(
          `Los registros duplicados de "${spanishName}" tienen descripciones distintas.`,
        );
      }

      if (
        compatibilitySignature(existing.component.compatibility) !==
        compatibilitySignature(compatibility)
      ) {
        throw new Error(
          `Los registros duplicados de "${spanishName}" tienen compatibilidad distinta.`,
        );
      }

      existing.component.amount += rawComponent.amount;
      existing.englishNames.set(englishKey, englishName);
      existing.sourceProducts.set(sourceKey, sourceProduct);
      existing.occurrenceCount += 1;
    }
  }

  const ids = new Map<string, string>();
  const components = [...componentsByName.values()]
    .map(({ component, englishNames, sourceProducts }) => {
      const allEnglishNames = [...englishNames.values()];
      const previousName = ids.get(component.id);

      if (previousName && previousName !== component.name.spanish) {
        throw new Error(
          `El identificador "${component.id}" corresponde a "${previousName}" y "${component.name.spanish}".`,
        );
      }

      ids.set(component.id, component.name.spanish);

      const image = getComponentImage(component.id);

      return {
        ...component,
        name: {
          ...component.name,
          english: allEnglishNames[0],
          englishAliases: allEnglishNames.slice(1),
        },
        sourceProducts: [...sourceProducts.values()],
        ...(image ? { image } : undefined),
      };
    })
    .sort((left, right) =>
      left.name.spanish.localeCompare(right.name.spanish, "es", {
        numeric: true,
        sensitivity: "base",
      }),
    );

  const totalUnits = components.reduce(
    (total, component) => total + component.amount,
    0,
  );

  if (totalUnits !== rawTotalUnits) {
    throw new Error("La normalización alteró la cantidad total del inventario.");
  }

  return {
    metadata: {
      schemaVersion: rawInventory.schema_version,
      generatedOn: rawInventory.generated_on,
      updatedOn: rawInventory.updated_on,
      amountBasis: rawInventory.amount_basis,
      platforms: [...rawInventory.compatibility_targets],
      compatibilityStatuses: [
        ...rawInventory.compatibility_status_values,
      ],
      productCount: rawInventory.products.length,
      componentLineCount,
      uniqueComponentCount: components.length,
      repeatedNameCount: [...componentsByName.values()].filter(
        ({ occurrenceCount }) => occurrenceCount > 1,
      ).length,
      totalUnits,
      notes: [...rawInventory.notes],
    },
    components,
  };
}

const rawInventory = inventoryJson as unknown as RawInventory;

export const inventory = normalizeInventory(rawInventory);
export const inventoryComponents = inventory.components;
export const inventoryMetadata = inventory.metadata;
