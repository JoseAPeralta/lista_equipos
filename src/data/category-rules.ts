import type { ComponentCategory } from "@/types/inventory";

interface CategoryDefinition {
  value: ComponentCategory;
  label: string;
}

interface CategoryRule {
  category: ComponentCategory;
  patterns: readonly RegExp[];
}

export const componentCategories = [
  { value: "sensor", label: "Sensores" },
  { value: "actuator", label: "Actuadores" },
  {
    value: "development-board",
    label: "Microcontroladores y placas",
  },
  { value: "display", label: "Pantallas y visualización" },
  { value: "input-control", label: "Entrada y control" },
  { value: "communication", label: "Comunicación inalámbrica" },
  { value: "basic-electronics", label: "Electrónica básica" },
  { value: "power", label: "Alimentación" },
  { value: "cables-connectors", label: "Cables y conectores" },
  { value: "accessories-mounting", label: "Accesorios y montaje" },
] as const satisfies readonly CategoryDefinition[];

function normalizeCategoryName(name: string): string {
  return name.trim().replace(/\s+/gu, " ").normalize("NFC").toLocaleLowerCase("es");
}

const categoryOverrides = new Map<string, ComponentCategory>([
  [
    "conjunto rfid mfrc522 con lector, tarjeta y llavero",
    "communication",
  ],
  ["conector con cable para batería de 9 v", "cables-connectors"],
  ["hélice para motor", "accessories-mounting"],
  ["interruptor de inclinación", "sensor"],
  ["interruptor de vibración", "sensor"],
  ["juego de tapas de colores para pulsadores", "accessories-mounting"],
  ["módulo adaptador para esp8266", "communication"],
  ["módulo amplificador de potencia de audio", "basic-electronics"],
  ["módulo amplificador para altavoz", "basic-electronics"],
  ["módulo con interruptor magnético de láminas", "sensor"],
  ["módulo de reloj de tiempo real ds1302", "basic-electronics"],
  ["módulo interruptor de efecto hall", "sensor"],
  ["módulo sensor táctil capacitivo", "input-control"],
  [
    "tarjeta de referencia del código de colores de resistencias",
    "accessories-mounting",
  ],
  ["tarjeta microsd de 64 gb", "accessories-mounting"],
  ["tapa amarilla para pulsador", "accessories-mounting"],
  ["tapa azul para pulsador", "accessories-mounting"],
  ["tapa roja para pulsador", "accessories-mounting"],
  ["tapa verde para pulsador", "accessories-mounting"],
]);

const categoryRules: readonly CategoryRule[] = [
  {
    category: "development-board",
    patterns: [
      /^placa raspberry pi zero/u,
      /^placa compatible con arduino nano/u,
      /^placa de desarrollo compatible con esp32/u,
    ],
  },
  {
    category: "communication",
    patterns: [/rfid/u, /bluetooth/u, /wi-fi/u, /lora/u, /esp8266/u],
  },
  {
    category: "sensor",
    patterns: [
      /sensor/u,
      /fotoresistencia/u,
      /termistor/u,
      /cámara csi/u,
      /medición ultrasónica/u,
      /acelerómetro/u,
      /giroscopio/u,
      /humedad del suelo/u,
      /infrarrojo detector/u,
      /infrarrojo para medición/u,
      /interruptor de inclinación/u,
      /interruptor de vibración/u,
      /interruptor magnético/u,
      /efecto hall/u,
    ],
  },
  {
    category: "actuator",
    patterns: [
      /^altavoz/u,
      /amplificador/u,
      /minibomba/u,
      /^motor de/u,
      /^motor paso/u,
      /^motorreductor/u,
      /^servomotor/u,
      /zumbador/u,
      /^relé/u,
      /módulo de relé/u,
    ],
  },
  {
    category: "display",
    patterns: [
      /^led /u,
      /led rgb/u,
      /led direccionables/u,
      /barra gráfica/u,
      /matriz(?: de puntos)? led/u,
      /pantalla/u,
      /visualizador/u,
      /semáforo led/u,
    ],
  },
  {
    category: "input-control",
    patterns: [
      /codificador rotatorio/u,
      /potenciómetro/u,
      /palanca de mando/u,
      /interruptor deslizante/u,
      /microinterruptor/u,
      /pulsador/u,
      /teclado matricial/u,
    ],
  },
  {
    category: "cables-connectors",
    patterns: [
      /^adaptador mini-hdmi/u,
      /^cable /u,
      /^cinta de .*cables/u,
      /^juego de .*cables/u,
      /^tira (?:de |hembra)/u,
    ],
  },
  {
    category: "power",
    patterns: [/batería/u, /alimentación/u, /portapilas/u],
  },
  {
    category: "basic-electronics",
    patterns: [
      /circuito integrado/u,
      /controlador de motores/u,
      /convertidor/u,
      /^diodo/u,
      /^condensador/u,
      /registro de desplazamiento/u,
      /^resistencia/u,
      /^transistor/u,
      /reloj de tiempo real/u,
      /controladora uln2003/u,
    ],
  },
  {
    category: "accessories-mounting",
    patterns: [
      /^caja /u,
      /^carcasa /u,
      /^hélice /u,
      /tapa/u,
      /placa de expansión gpio/u,
      /placa perforada/u,
      /^protoboard/u,
      /tarjeta microsd/u,
      /tarjeta de referencia/u,
    ],
  },
];

export function getComponentCategory(name: string): ComponentCategory {
  const normalizedName = normalizeCategoryName(name);
  const override = categoryOverrides.get(normalizedName);

  if (override) {
    return override;
  }

  for (const rule of categoryRules) {
    if (rule.patterns.some((pattern) => pattern.test(normalizedName))) {
      return rule.category;
    }
  }

  throw new Error(`No existe una categoría para "${name}".`);
}

export function getComponentCategoryLabel(
  category: ComponentCategory,
): string {
  const definition = componentCategories.find(
    ({ value }) => value === category,
  );

  if (!definition) {
    throw new Error(`No existe una etiqueta para la categoría "${category}".`);
  }

  return definition.label;
}
