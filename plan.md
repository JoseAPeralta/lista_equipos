# Plan de implementación

Última actualización: 2026-09-13

## Seguimiento

- `[ ]` Pendiente
- `[x]` Completado y verificado
- La fase activa se indica expresamente en su encabezado.
- Este documento debe actualizarse en el mismo cambio que altere alcance, arquitectura o decisiones del proyecto.

## Objetivo

Construir una aplicación web estática, responsive y accesible para que estudiantes consulten los componentes electrónicos disponibles. La aplicación debe leer `inventario_componentes.json`, mostrar los componentes deduplicados, permitir búsqueda, filtros de categoría y compatibilidad, y paginar los resultados. Inicialmente no habrá fotografías, pero la arquitectura debe permitir añadir una imagen por componente sin reescribir las tarjetas.

## Decisiones confirmadas

- La unidad visible será el componente individual, no el producto o kit completo.
- Las 207 líneas de contenido se deduplicarán por nombre técnico en español y sus cantidades se sumarán.
- El resultado esperado es de 165 componentes únicos; 38 nombres aparecen en más de un producto.
- No se mostrarán enlaces de Amazon.
- El filtro de compatibilidad seleccionará una plataforma y mostrará compatibilidad directa.
- Un checkbox permitirá incluir componentes compatibles mediante adaptación.
- El filtro de tipo utilizará categorías derivadas porque el JSON no incluye categoría por componente.
- Toda la interfaz y los textos accesibles estarán en español.
- La aplicación seguirá siendo cliente estático, sin backend ni router.

## Arquitectura prevista

```text
src/
├── App.tsx
├── components/
│   ├── layout/
│   │   └── SiteHeader.tsx
│   ├── inventory/
│   │   ├── InventoryFilters.tsx
│   │   ├── ComponentGrid.tsx
│   │   ├── ComponentCard.tsx
│   │   ├── ComponentMedia.tsx
│   │   ├── CompatibilityBadges.tsx
│   │   ├── InventoryPagination.tsx
│   │   └── EmptyState.tsx
│   └── ui/
├── data/
│   ├── inventory.ts
│   ├── category-rules.ts
│   └── component-images.ts
├── hooks/
│   └── use-inventory.ts
└── types/
    └── inventory.ts
```

La estructura podrá simplificarse si una separación no aporta una responsabilidad real. `App.tsx` compondrá la página; las transformaciones de datos serán funciones puras; el hook mantendrá solamente el estado de consulta; los componentes visuales recibirán props tipadas.

## Fase 1: Preparación del proyecto (COMPLETADA)

### Acciones

- [x] Sustituir el contenido de demostración de `src/App.tsx` por una base mínima en español.
- [x] Construir la base exclusivamente con componentes y props de Chakra UI v3.
- [x] Eliminar la importación de `src/index.css` desde `src/main.tsx`.
- [x] Eliminar `src/App.css` y `src/index.css` de la plantilla.
- [x] Eliminar imágenes e iconos de demostración que ya no tengan referencias.
- [x] Cambiar el idioma del documento a español en `index.html`.
- [x] Definir título y descripción del sitio en `index.html`.
- [x] Añadir `resolveJsonModule` a `tsconfig.app.json`.
- [x] Traducir a español cualquier texto accesible existente en los componentes base utilizados.
- [x] Confirmar que no se introduce backend ni router.
- [x] Configurar en Vite el alias absoluto `@` hacia `src` para que coincida con TypeScript.
- [x] Verificar el alias en el servidor de desarrollo y en el build de producción.
- [x] Ejecutar `pnpm lint`.
- [x] Ejecutar `pnpm build`.

### Criterio de salida

- [x] La aplicación muestra una base responsive en español sin elementos de la plantilla de Vite.
- [x] No quedan imports ni recursos huérfanos de la demostración.
- [x] El proyecto pasa lint, TypeScript y build de producción.

## Fase 2: Modelo y normalización del inventario (COMPLETADA)

### Acciones

- [x] Definir los tipos del archivo original y del componente normalizado en `src/types/inventory.ts`.
- [x] Importar `inventario_componentes.json` desde `src/data/inventory.ts`.
- [x] Aplanar los arreglos `products[].content` mediante una función pura.
- [x] Normalizar el nombre español para usarlo como clave de deduplicación.
- [x] Sumar `amount` para los nombres repetidos.
- [x] Acumular todos los productos de origen sin duplicados.
- [x] Conservar todos los nombres ingleses distintos como alias de búsqueda.
- [x] Mantener una descripción canónica y la compatibilidad completa de cada componente.
- [x] Generar un identificador estable y legible que no dependa del índice.
- [x] Exponer metadatos útiles como plataformas, fecha de actualización y total de unidades.
- [x] Validar 207 líneas de entrada, 165 componentes únicos y 38 nombres repetidos.
- [x] Comparar programáticamente cada cantidad, alias y producto de origen contra el JSON original.
- [x] Ejecutar `pnpm lint` y `pnpm build` después de incorporar la capa de datos.

### Criterio de salida

- [x] La UI puede consumir una colección tipada sin conocer la estructura de productos del JSON.
- [x] Ninguna cantidad ni producto de origen se pierde durante la deduplicación.

## Fase 3: Clasificación por categoría (COMPLETADA)

### Acciones

- [x] Definir claves internas y etiquetas en español para las categorías.
- [x] Incluir como mínimo: sensores, actuadores, microcontroladores y placas, pantallas, entrada y control, comunicación, electrónica básica, alimentación, cables y conectores, y accesorios y montaje.
- [x] Implementar reglas ordenadas por palabras clave.
- [x] Implementar excepciones manuales para componentes ambiguos.
- [x] Asignar exactamente una categoría a cada componente normalizado.
- [x] Revisar manualmente los 165 resultados.
- [x] Evitar una categoría silenciosa o vacía; cualquier elemento sin clasificar debe detectarse durante desarrollo.
- [x] Ejecutar una auditoría semántica independiente de las 165 clasificaciones.
- [x] Ejecutar `pnpm lint` y `pnpm build` después de integrar las categorías.

### Criterio de salida

- [x] Todos los componentes tienen una categoría pedagógicamente clara.
- [x] Las reglas y excepciones pueden mantenerse sin editar componentes visuales.

## Fase 4: Estado y consultas React (COMPLETADA)

### Acciones

- [x] Definir el estado mínimo: texto, categoría, plataforma, inclusión parcial, página y tamaño de página.
- [x] Centralizar ese estado y sus transiciones en `useInventory`.
- [x] Calcular resultados filtrados, páginas y segmento visible como datos derivados durante el render.
- [x] No duplicar resultados derivados dentro de estado ni sincronizarlos con efectos.
- [x] Reiniciar la página al modificar filtros o tamaño de página.
- [x] Mantener la página dentro del rango válido después de cualquier cambio.
- [x] Ordenar alfabéticamente por nombre español como comportamiento inicial.
- [x] Evitar memoización manual sin una medición que la justifique; React Compiler ya está activo.
- [x] Validar búsqueda, categorías, plataformas, adaptación, alias, límites y transiciones mediante una prueba ejecutable.
- [x] Auditar independientemente la API y las invariantes del hook.
- [x] Ejecutar `pnpm lint` y `pnpm build` después de incorporar el hook.

### Criterio de salida

- [x] Las reglas de consulta no dependen de Chakra UI ni de componentes visuales.
- [x] Cualquier combinación de filtros produce un estado de página válido.

## Fase 5: Estructura visual reutilizable (COMPLETADA)

### Acciones

- [x] Mantener `App.tsx` como punto de composición, sin reglas de dominio extensas.
- [x] Crear `SiteHeader` con título, explicación breve, resumen y control de tema.
- [x] Crear `InventoryFilters` como formulario controlado.
- [x] Crear `ComponentGrid` responsable del layout de resultados.
- [x] Crear `ComponentCard` responsable de presentar un componente.
- [x] Crear `ComponentMedia` responsable de fotografía o placeholder.
- [x] Crear `CompatibilityBadges` para representar estados de forma consistente.
- [x] Crear `InventoryPagination` independiente del grid.
- [x] Crear `EmptyState` con una acción para limpiar filtros.
- [x] Usar props TypeScript específicas y `import type` para tipos.
- [x] Evitar componentes triviales sin una responsabilidad o reutilización real.
- [x] Auditar límites de responsabilidad, responsive y accesibilidad de la composición.
- [x] Ejecutar `pnpm lint`, `pnpm build` y comprobar los módulos en el servidor de desarrollo.

### Criterio de salida

- [x] Cada componente visual tiene una responsabilidad clara.
- [x] La presentación puede cambiar sin modificar la normalización del inventario.

## Fase 6: Búsqueda y filtros (COMPLETADA durante la Fase 5)

### Acciones

- [x] Buscar en nombre español, nombres ingleses y descripción.
- [x] Ignorar diferencias de mayúsculas, espacios y acentos.
- [x] Permitir filtrar por una categoría o ver todas.
- [x] Permitir seleccionar Arduino Nano V3.0, ESP32-DevKitC-32 o Raspberry Pi Zero 2 W.
- [x] Mostrar únicamente estado `sí` cuando exista una plataforma seleccionada.
- [x] Incluir `sí, con adaptación` al activar el checkbox correspondiente.
- [x] Excluir `no` y `no aplica` mientras el filtro de plataforma esté activo.
- [x] Desactivar u ocultar el checkbox si no hay plataforma seleccionada.
- [x] Añadir una acción para limpiar todos los filtros.
- [x] Mostrar el total de coincidencias y un estado vacío claro.

### Criterio de salida

- [x] Los filtros se pueden combinar y su resultado coincide con la semántica del JSON.
- [x] El formulario es controlable mediante teclado y tiene etiquetas visibles.

## Fase 7: Tarjetas y detalles técnicos (COMPLETADA)

### Acciones

- [x] Mostrar el nombre español como título y el inglés como dato secundario.
- [x] Destacar la cantidad total disponible.
- [x] Mostrar categoría y productos de origen.
- [x] Mostrar una descripción clara sin cortar información esencial.
- [x] Representar cada compatibilidad con texto, icono y color.
- [x] Usar verde para directa, ámbar para adaptación, rojo para no compatible y gris para no aplica.
- [x] Permitir consultar consideraciones técnicas sin producir tarjetas permanentemente extensas.
- [x] Destacar la consideración de la plataforma actualmente filtrada.
- [x] Mantener alturas y espaciado coherentes cuando falten datos opcionales.

### Criterio de salida

- [x] Una tarjeta explica qué es el componente, cuántos hay y con qué plataformas puede usarse.
- [x] El color nunca es el único medio para comunicar compatibilidad.

## Fase 8: Paginación (COMPLETADA durante la Fase 5)

### Acciones

- [x] Utilizar 12 elementos por página inicialmente.
- [x] Permitir tamaños de 12, 24 y 48.
- [x] Mostrar el intervalo visible y el total de resultados.
- [x] Implementar navegación anterior y siguiente.
- [x] Implementar páginas numeradas con elipsis cuando sean necesarias.
- [x] Desactivar correctamente los controles en los límites.
- [x] Implementar una variante compacta para pantallas pequeñas.
- [x] Añadir una etiqueta accesible a la navegación.
- [x] Mover el foco a los resultados y anunciar página y rango después de navegar.

### Criterio de salida

- [x] No se puede navegar a una página vacía o inexistente.
- [x] La paginación funciona con cualquier combinación de filtros y tamaño de página.

## Fase 9: Responsive y accesibilidad (EN CURSO) (EN CURSO)

### Acciones

- [x] Aplicar estilos mobile-first mediante props responsive de Chakra UI.
- [x] Mostrar una columna en móvil, dos en tablet y tres en escritorio.
- [x] Apilar filtros en móvil y distribuirlos progresivamente en pantallas mayores.
- [x] Evitar anchos fijos y desplazamiento horizontal.
- [x] Permitir saltos de línea en nombres, badges y unidades largas.
- [x] Mantener objetivos táctiles de al menos 44 px.
- [x] Usar estructura semántica con `header`, `main`, secciones y encabezados.
- [x] Asociar etiquetas visibles con todos los controles.
- [x] Mantener foco visible y navegación completa por teclado.
- [x] Verificar contraste y contenido en tema claro y oscuro a nivel de código.
- [x] Anunciar cambios relevantes en el número de resultados.
- [x] Probar visualmente 320, 375, 768, 1024 y 1440 px, además de ambas orientaciones móviles (QA con Chromium headless).

### Criterio de salida

- [x] No hay contenido inaccesible ni desbordado en los anchos objetivo.
- [x] Todas las funciones principales pueden utilizarse sin ratón.

## Fase 10: Preparación para imágenes (COMPLETADA)

### Acciones

- [x] Añadir al modelo normalizado una imagen opcional con `src` y `alt`.
- [x] Renderizar `ComponentMedia` desde el inicio aunque solo muestre un placeholder.
- [x] Reservar una relación de aspecto constante para evitar saltos de layout.
- [x] Usar `objectFit="contain"` para futuras fotografías de componentes.
- [x] Diseñar un manifiesto de imágenes asociado al identificador estable.
- [x] Evitar asociaciones mediante índice o posición del componente.
- [x] Definir textos alternativos útiles para reconocer cada componente.
- [x] Implementar carga diferida y fallback ante errores.
- [x] Documentar formato, dimensiones y peso máximo para los archivos futuros.
- [x] Preferir WebP o AVIF para las imágenes finales.

### Criterio de salida

- [x] Añadir una fotografía requiere registrar el archivo, no modificar `ComponentCard`.
- [x] La ausencia o el error de una imagen no altera el layout ni oculta información.

## Fase 11: Pruebas y entrega (COMPLETADA)

### Acciones

- [x] Decidir e instalar un entorno de pruebas; actualmente el repositorio no tiene uno.
- [x] Probar normalización, deduplicación y suma de cantidades.
- [x] Probar clasificación y detección de elementos sin categoría.
- [x] Probar búsqueda sin distinción de acentos o mayúsculas.
- [x] Probar compatibilidad directa y parcial.
- [x] Probar límites, reinicio y cambio de tamaño de la paginación.
- [x] Probar estados vacío, carga normal y datos opcionales.
- [x] Ejecutar `pnpm lint`.
- [x] Ejecutar `pnpm build`.
- [x] Revisar el resultado de producción con `pnpm preview`.
- [x] Confirmar que no existen enlaces de Amazon ni dependencias de backend.
- [x] Actualizar `README.md` y `AGENTS.md` si cambian comandos o arquitectura.

### Definición final de terminado

- [x] Se muestran 165 componentes únicos y cantidades agregadas correctas.
- [x] Todos los componentes tienen una categoría.
- [x] Búsqueda, compatibilidad, inclusión parcial y categoría se pueden combinar.
- [x] La paginación permanece válida después de cualquier filtro.
- [x] La interfaz funciona correctamente en móvil, tablet y escritorio.
- [x] Ninguna tarjeta depende de disponer de una imagen.
- [x] La aplicación no contiene enlaces de Amazon.
- [x] Lint, TypeScript y build de producción finalizan sin errores.

## Registro de ejecución

- 2026-09-12: plan inicial creado. Fase 1 iniciada.
- 2026-09-12: reemplazada la demostración de Vite por una base responsive en español construida con Chakra UI.
- 2026-09-12: eliminados los CSS, imágenes, favicon e iconos de la plantilla; una búsqueda global confirmó que no quedan referencias.
- 2026-09-12: añadido soporte TypeScript para importar JSON y actualizados idioma, metadatos y texto accesible del modo de color.
- 2026-09-12: el primer lint detectó cinco errores heredados en helpers generados de Chakra UI. Se corrigieron dos aliases de tipos vacíos y se limitaron las excepciones de Fast Refresh a `color-mode.tsx` y `toaster.tsx`, que exportan deliberadamente componentes junto con hooks o singletons.
- 2026-09-12: `pnpm lint` y `pnpm build` ejecutados nuevamente sin errores. Fase 1 completada.
- 2026-09-12: Fase 2 iniciada; se verificará el esquema completo antes de definir el modelo normalizado.
- 2026-09-12: creados los tipos del inventario original, componentes normalizados, productos de origen y metadatos.
- 2026-09-12: implementadas validación estructural, deduplicación, suma de cantidades, alias ingleses, asociaciones de origen, orden alfabético e IDs legibles con detección de colisiones.
- 2026-09-12: la validación ejecutable confirmó 8 productos, 207 líneas, 165 componentes únicos, 38 nombres repetidos, 1.044 unidades, 165 IDs únicos y 3 componentes con alias ingleses adicionales.
- 2026-09-12: `pnpm lint` y `pnpm build` finalizaron sin errores. Fase 2 completada.
- 2026-09-12: corregida la resolución del alias `@` en el servidor de desarrollo mediante un alias absoluto en `vite.config.ts`; `compilerOptions.paths` solo cubría TypeScript.
- 2026-09-12: verificada la corrección con `pnpm lint`, `pnpm build` y peticiones al servidor Vite para la página, `src/main.tsx` y el proveedor Chakra.
- 2026-09-12: Fase 3 iniciada; se implementará una taxonomía cerrada con reglas ordenadas, excepciones manuales y detección de componentes sin clasificar.
- 2026-09-13: creadas diez categorías con etiquetas en español, reglas ordenadas y excepciones explícitas; la categoría pasó a formar parte del componente normalizado.
- 2026-09-13: la primera revisión corrigió las tapas de pulsadores, que coincidían accidentalmente con la regla de entrada y control.
- 2026-09-13: una auditoría semántica independiente revisó los 165 componentes. Se reclasificaron el conector de batería, dos amplificadores y el sensor táctil; se mantuvieron el microinterruptor en entrada y el adaptador ESP8266 en comunicación por utilidad pedagógica.
- 2026-09-13: resultado final sin elementos sin clasificar: 37 sensores, 14 actuadores, 3 placas, 17 pantallas, 12 entradas, 5 comunicaciones, 34 elementos de electrónica básica, 4 de alimentación, 24 cables o conectores y 15 accesorios.
- 2026-09-13: `pnpm lint` y `pnpm build` finalizaron sin errores. Fase 3 completada.
- 2026-09-13: Fase 4 iniciada; el estado de consulta se centralizará sin almacenar resultados derivados ni sincronizarlos mediante efectos.
- 2026-09-13: creado `useInventory` con reducer, filtros controlados, orden alfabético, paginación, rangos y acciones; las colecciones filtrada y visible se calculan durante el render.
- 2026-09-13: una validación ejecutable comprobó los 165 componentes, 14 páginas de 12 elementos, 9 elementos en la última página, alias ingleses, búsqueda sin acentos, categorías, plataformas y reinicios del reducer.
- 2026-09-13: la auditoría detectó que una página `NaN` podía producir rangos inválidos. Se normalizan ahora todas las páginas no finitas y se reforzó la validación de los vocabularios de plataforma y compatibilidad del JSON.
- 2026-09-13: se mantiene el clamp derivado para cambios externos de colección sin sincronización por efectos; la fuente de componentes de esta aplicación es estática.
- 2026-09-13: `pnpm lint` y `pnpm build` finalizaron sin errores. Fase 4 completada.
- 2026-09-13: Fase 5 iniciada; se compondrá la primera interfaz completa mediante componentes Chakra UI reutilizables y controlados.
- 2026-09-13: creados `SiteHeader`, `InventoryFilters`, `ComponentGrid`, `ComponentCard`, `ComponentMedia`, `CompatibilityBadges`, `InventoryPagination` y `EmptyState`; `App.tsx` quedó limitado a componer datos, hook y presentación.
- 2026-09-13: la composición conectó búsqueda, categorías, plataforma, adaptación, estado vacío y paginación, por lo que las Fases 6 y 8 quedaron completadas durante la Fase 5.
- 2026-09-13: el primer build visual detectó el uso inválido de `Text` como etiqueta; se reemplazó por `Field.Root` y `Field.Label` de Chakra UI v3.
- 2026-09-13: una auditoría independiente no encontró defectos graves. Se añadieron foco y anuncio al paginar, controles táctiles de 44 px, orígenes completos, plural correcto, ayuda asociada, formulario semántico y placeholder decorativo.
- 2026-09-13: el grid utiliza una columna en móvil, dos desde `md` y tres desde `lg`; `ComponentMedia` reserva una proporción 4:3 y recibe el ID estable para la futura asociación de imágenes.
- 2026-09-13: `pnpm lint`, `pnpm build` y las peticiones al servidor de desarrollo finalizaron correctamente. El bundle principal mide 732,18 kB minificado y 182,73 kB gzip; Vite mantiene una advertencia no bloqueante por superar 500 kB antes de compresión.
- 2026-09-13: Fase 5 completada.
- 2026-09-13: Fase 7 continuada; cada tarjeta incorporó una sección plegable de consideraciones técnicas mediante `Collapsible` de Chakra UI v3, que se abre automáticamente al filtrar por plataforma.
- 2026-09-13: la consideración de la plataforma filtrada se resalta con fondo y borde teal y la etiqueta "Plataforma seleccionada"; los rótulos de plataforma se movieron a un módulo neutral (`labels.ts`) para cumplir la regla Fast Refresh.
- 2026-09-13: `pnpm lint`, `pnpm build` y las peticiones al servidor de desarrollo finalizaron sin errores. Fase 7 completada.
- 2026-09-13: Fase 9 iniciada. El badge de categoría ahora permite salto de línea (`whiteSpace: normal`) y las etiquetas de plataforma pueden encogerse (`minW: 0`) para evitar desbordes en anchos reducidos.
- 2026-09-13: una revisión estática confirmó que todo el texto usa tokens semánticos de Chakra (adaptables a claro y oscuro); el único color fijo es la barra decorativa del encabezado. Un render SSR completo verificó encabezado, búsqueda, filtros, checkbox, 12 tarjetas, paginación y pie sin errores.
- 2026-09-13: `pnpm lint`, `pnpm build` y el servidor de desarrollo finalizaron sin errores. La prueba visual por anchos de pantalla queda pendiente de QA manual con navegador.
- 2026-09-13: Fase 10 iniciada y completada. Se añadió `image?: { src, alt }` al componente normalizado, se creó un manifiesto por ID estable (`src/data/component-images.ts`) y `normalizeInventory` lo adjunta automáticamente.
- 2026-09-13: `ComponentMedia` resuelve la imagen por el ID estable, usa `loading="lazy"`, `objectFit="contain"` y vuelve al placeholder si la carga falla, manteniendo la proporción 4:3 reservada. Con el manifiesto vacío se renderizan 12 placeholders y ningún componente queda sin layout estable.
- 2026-09-13: el README quedó documentado con formato (WebP/AVIF), dimensiones (800 × 600 px), peso máximo (150 KB) y el procedimiento para registrar una imagen sin modificar `ComponentCard`.
- 2026-09-13: `pnpm lint`, `pnpm build`, un render SSR y el servidor de desarrollo finalizaron sin errores. Fase 10 completada.
- 2026-09-13: Fase 11 ejecutada. Se instaló Vitest 5 + jsdom + Testing Library, con `pnpm test` configurado en `vite.config.ts`, setup de jest-dom y 23 pruebas distribuidas en 4 archivos.
- 2026-09-13: las pruebas cubren normalización y deduplicación, categorías con detección de elementos sin clasificar, búsqueda sin acentos, compatibilidad directa/adaptada, paginación y reducer, y el estado vacío como componente.
- 2026-09-13: `pnpm test` (23/23), `pnpm lint`, `pnpm build` y `pnpm preview` finalizaron sin errores; el preview sirvió el HTML con el título correcto.
- 2026-09-13: se confirmó que la interfaz no contiene enlaces de Amazon ni dependencias de backend; los campos `asin` y `amazon_short_url` solo existen en el tipo del JSON original y no se exponen en la UI.
- 2026-09-13: se actualizaron `AGENTS.md` y `README.md` con el comando `pnpm test`. Fase 11 completada y plan de implementación cerrado.
- 2026-09-13: pendiente de QA manual con navegador: prueba visual de 320/375/768/1024/1440 px, ambas orientaciones y contraste real en tema claro y oscuro.
- 2026-09-13: QA visual completado con Chromium headless (Playwright). Se descargaron e instalaron en el directorio de usuario las bibliotecas de sistema faltantes (`libnspr4`, `libnss3`, `libasound2t64`) y se cargaron con `LD_LIBRARY_PATH`.
- 2026-09-13: el QA verificó 320, 375, 768, 1024 y 1440 px en claro y oscuro sin overflow horizontal, 12 tarjetas por página, buscador, paginación y modo de color; búsqueda "sensor" devolvió 35 resultados y el estado vacío mostró el botón "Limpiar filtros" activo. Capturas en `/tmp/opencode/qa-*.png`.
- 2026-09-13: tras el QA se eliminó `playwright` de las dependencias de desarrollo. Plan de implementación cerrado.
- 2026-09-13: el usuario proporcionó los collages etiquetados en `imagenes-muestra/` (8 archivos AVIF, uno por producto) para extraer una imagen por componente. Se instalaron temporalmente `sharp` y `tesseract.js`.
- 2026-09-13: la extracción por OCR (grilla de celdas por palabras de cantidad + etiquetas) tuvo un bug de geometría: las bandas de fila usaban puntos medios entre filas de cantidad, desplazando cada recorte media celda hacia abajo (recortes casi vacíos con solo la línea de grilla).
- 2026-09-13: corregido: las bandas ahora van entre posiciones de cantidad consecutivas (celda = [cantidad anterior, cantidad propia]) con la primera fila iniciando debajo del encabezado del collage y la fila final de Freenove añadida manualmente. Verificado por estadísticas de píxeles (las celdas pasan de ~8% a 20-60% de contenido).
- 2026-09-13: se generaron 144 recortes por celda + 4 imágenes de producto individual = 148 componentes con imagen propia, registrados en `src/data/component-images.ts` con `alt` = nombre del componente.
- 2026-09-13: 17 componentes sin imagen quedaron documentados en `fotos_faltantes.md` (cables Dupont TODOELEC sin etiquetas, accesorios CanaKit, cable USB-C LUIRSAY, 2 duplicados). CSV de revisión en `/tmp/opencode/cells/recortes_revisar.csv`.
- 2026-09-13: `sharp` y `tesseract.js` retirados; `pnpm lint`, `pnpm test` (23/23) y `pnpm build` finalizaron sin errores.
