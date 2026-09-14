# Fotos faltantes

Componentes sin imagen propia. No aparecen como celdas reconocibles en los collages de `imagenes-muestra/` (o su celda no pudo identificarse con OCR).

| id | Componente | Motivo |
| --- | --- | --- |
| adaptador-mini-hdmi-a-hdmi | Adaptador Mini-HDMI a HDMI | Solo en kit CanaKit; la imagen `Raspberry Pi Zero 2 W.avif` no contiene este componente. |
| cable-adaptador-micro-usb-otg | Cable adaptador Micro-USB OTG | Solo en kit CanaKit; no está en ninguna imagen etiquetada. |
| cable-puente-dupont-hembra-hembra-de-10-cm | Cable puente Dupont hembra-hembra de 10 cm | Kit TODOELEC; `cables puente Dupont multicolor.avif` es una foto sin etiquetas legibles por OCR. |
| cable-puente-dupont-hembra-hembra-de-20-cm | Cable puente Dupont hembra-hembra de 20 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-hembra-hembra-de-30-cm | Cable puente Dupont hembra-hembra de 30 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-hembra-macho-de-10-cm | Cable puente Dupont hembra-macho de 10 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-hembra-macho-de-20-cm | Cable puente Dupont hembra-macho de 20 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-hembra-macho-de-30-cm | Cable puente Dupont hembra-macho de 30 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-macho-macho-de-10-cm | Cable puente Dupont macho-macho de 10 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-macho-macho-de-20-cm | Cable puente Dupont macho-macho de 20 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-puente-dupont-macho-macho-de-30-cm | Cable puente Dupont macho-macho de 30 cm | Kit TODOELEC; imagen sin etiquetas legibles. |
| cable-usb-c-de-alimentacion-y-datos | Cable USB-C de alimentación y datos | Producto LUIRSAY; la imagen `ARDUINO Nano V3.0.avif` solo muestra la placa. |
| carcasa-disipadora-de-aluminio-para-raspberry-pi-zero | Carcasa disipadora de aluminio para Raspberry Pi Zero | Solo en kit CanaKit; no está en ninguna imagen etiquetada. |
| fuente-de-alimentacion-micro-usb-de-2-5-a | Fuente de alimentación Micro-USB de 2,5 A | Solo en kit CanaKit; no está en ninguna imagen etiquetada. |
| juego-de-tapas-de-colores-para-pulsadores | Juego de tapas de colores para pulsadores | Celda en collage Raphael no identificada por OCR ("Button x1"). |
| registro-de-desplazamiento-serie-paralelo-74hc595 | Registro de desplazamiento serie-paralelo 74HC595 | Variante de Freenove del 74HC595; celda no diferenciada (el 74HC595 de Raphael sí tiene imagen). |
| tarjeta-microsd-de-64-gb | Tarjeta microSD de 64 GB | Solo en kit CanaKit; no está en ninguna imagen etiquetada. |

## Nota
Los componentes restantes (148) tienen imagen recortada de los collages en `src/assets/components/{id}.png`, registrada en `src/data/component-images.ts`. Los recortes se generaron por grilla + OCR y deben revisarse visualmente (ver `recortes_revisar.csv` en `/tmp/opencode/cells/`).