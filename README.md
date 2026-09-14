# Inventario de componentes electrónicos

Aplicación web estática (Vite + React 19 + TypeScript + Chakra UI v3) para que estudiantes consulten los componentes electrónicos disponibles en el laboratorio y su compatibilidad con Arduino Nano, ESP32 y Raspberry Pi Zero 2 W.

## Comandos

- `pnpm dev` — servidor de desarrollo
- `pnpm test` — pruebas unitarias y de componente con Vitest + Testing Library
- `pnpm build` — comprobación de tipos (`tsc -b`) y build de producción
- `pnpm lint` — ESLint
- `pnpm preview` — servir el build de producción

## Datos

La fuente única de verdad es `inventario_componentes.json`, en la raíz del proyecto. En `src/data/inventory.ts` se normaliza: se aplanan los `products[].content`, se deduplican los componentes por nombre técnico en español y se suman sus cantidades (207 líneas → 165 componentes únicos). No se muestran líneas de contenido sin deduplicar.

## Categorías

Los componentes no traen categoría en el JSON; se derivan mediante reglas por palabras clave y excepciones manuales en `src/data/category-rules.ts`. Cada componente normalizado tiene exactamente una de estas categorías: sensores, actuadores, microcontroladores y placas, pantallas, entrada y control, comunicación inalámbrica, electrónica básica, alimentación, cables y conectores, y accesorios y montaje.

## Imágenes de componentes

Aún no hay fotografías, pero la arquitectura ya está preparada para añadirlas sin tocar `ComponentCard`.

### Estado actual de las imágenes

- **148 de 165 componentes** tienen imagen propia en `src/assets/components/{id}.png`, recortadas de los collages de `imagenes-muestra/` (grilla detectada por OCR + recorte por el borde de cada celda) y registradas en `src/data/component-images.ts`.
- Las 4 imágenes de producto individual (placa Nano, placa ESP32, módulo LoRa, placa Pi Zero 2 W) se usan tal cual.
- Los **17 restantes** están documentados en `fotos_faltantes.md` (componentes de kits sin collage etiquetado: cables Dupont TODOELEC, accesorios CanaKit, etc.).
- El CSV `recortes_revisar.csv` (en `/tmp/opencode/cells/`) relaciona cada recorte con su celda de origen para una revisión visual.

### Cómo añadir o reemplazar una imagen

1. Coloca el archivo en `src/assets/components/`.
2. Abre `src/data/component-images.ts` y añade/actualiza la entrada del manifiesto usando el `id` estable del componente (nunca la posición ni el índice):

```ts
import imageAparato from "@/assets/components/aparato.webp";
// ...
const manifest: Record<string, InventoryComponentImage> = {
  "aparato": { src: imageAparato, alt: "Fotografía del aparato" },
};
```

- Usar `import` de Vite permite hashear el archivo y fallar en build si la ruta no existe.
- `src/data/inventory.ts` adjunta automáticamente `image` al componente normalizado mediante `getComponentImage(component.id)`.
- `ComponentMedia` resuelve la imagen por ese mismo `id`, la carga con `loading="lazy"` y `objectFit="contain"`, y si falla la carga vuelve al placeholder sin alterar el layout (relación de aspecto 4:3 reservada).

### Formato y tamaño recomendados

- Formato: WebP o AVIF (los recortes actuales están en PNG; convertir a WebP/AVIF reduciría el peso).
- Dimensiones: 800 × 600 px (proporción 4:3); suficiente para el grid de tres columnas.
- Peso máximo: 150 KB por imagen.
- `alt`: texto breve y descriptivo que permita reconocer el componente, por ejemplo "Placa compatible con Arduino Nano V3.0 con puerto USB-C".