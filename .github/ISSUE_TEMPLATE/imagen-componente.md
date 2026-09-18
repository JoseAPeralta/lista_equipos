---
name: Subir imagen de componente
about: Crear una tarea para recortar o fotografiar un componente y agregarlo mediante pull request.
title: "Imagen: "
labels: "imagen"
assignees: ""
---

<!--
Completa este issue con los datos de un solo componente.
No adjuntes aquí la imagen terminada: debe incorporarse mediante un pull request que incluya `Fixes #NUMERO`.
Consulta el checklist: https://github.com/JoseAPeralta/lista_equipos/blob/main/imagenes_pendientes.md
-->

## Componente

<!-- Nombre en español, exactamente como aparece en el checklist. -->

## Archivo destino

<!-- Nombre exacto `{id}.png`, por ejemplo: `led-rojo.png`. -->

## Tipo de tarea

- [ ] Reemplazar una imagen existente que fue recortada automáticamente.
- [ ] Agregar una de las imágenes faltantes y registrarla en `src/data/component-images.ts`.

## Origen de la imagen

- [ ] Recorte manual desde un archivo de `imagenes-muestra/`.
- [ ] Fotografía propia del componente físico.

**Archivo de origen o descripción de la fotografía:**

<!-- Ejemplo: `imagenes-muestra/SunFounder Raphael Ultimate Starter Kit.avif`. -->

## Texto alternativo

<!-- Descripción breve que permita reconocer el componente. -->

## Responsable del pull request

<!-- Usuario asignado por el docente, por ejemplo: @usuario. Si el cruce aún no fue publicado, escribe `Pendiente de asignación`. -->

## Criterios de aceptación

- [ ] Verifiqué que no existe otro issue abierto para este mismo archivo.
- [ ] El issue corresponde a un solo componente.
- [ ] La imagen será un PNG de 800 x 600 px (4:3), sin deformar el componente.
- [ ] La imagen pesará como máximo 150 KB.
- [ ] El archivo tendrá exactamente el nombre indicado en **Archivo destino**.
- [ ] La imagen no contendrá marcas de agua, datos personales ni material tomado de Internet sin autorización.
- [ ] El pull request incluirá `Fixes #NUMERO_DE_ISSUE` en su descripción.
