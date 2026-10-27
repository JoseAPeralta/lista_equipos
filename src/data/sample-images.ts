import freenove from "../../imagenes-muestra/Freenove - Kit de inicio completo para.avif";
import sunfounderRaphael from "../../imagenes-muestra/SunFounder Raphael Ultimate Starter Kit.avif";
import sunfounderSensores from "../../imagenes-muestra/SunFounder Kit Universal de Sensores Maker.avif";
import moduloLora from "../../imagenes-muestra/Módulo de Lora.avif";
import esp32 from "../../imagenes-muestra/ESP32-DevKitC-32.avif";
import arduinoNano from "../../imagenes-muestra/ARDUINO Nano V3.0.avif";
import raspberryPiZero from "../../imagenes-muestra/Raspberry Pi Zero 2 W.avif";

export interface SampleImage {
  id: string;
  title: string;
  fileName: string;
  src: string;
  alt: string;
}

export const sampleImages: SampleImage[] = [
  {
    id: "freenove",
    title: "Freenove · Kit de inicio completo",
    fileName: "Freenove - Kit de inicio completo para.avif",
    src: freenove,
    alt: "Collage del kit de inicio completo Freenove",
  },
  {
    id: "sunfounder-raphael",
    title: "SunFounder Raphael Ultimate Starter Kit",
    fileName: "SunFounder Raphael Ultimate Starter Kit.avif",
    src: sunfounderRaphael,
    alt: "Collage del SunFounder Raphael Ultimate Starter Kit",
  },
  {
    id: "sunfounder-sensores",
    title: "SunFounder Kit Universal de Sensores Maker",
    fileName: "SunFounder Kit Universal de Sensores Maker.avif",
    src: sunfounderSensores,
    alt: "Collage del SunFounder Kit Universal de Sensores Maker",
  },
  {
    id: "modulo-lora",
    title: "Módulo de Lora",
    fileName: "Módulo de Lora.avif",
    src: moduloLora,
    alt: "Fotografía del módulo de Lora",
  },
  {
    id: "esp32-devkitc",
    title: "ESP32-DevKitC-32",
    fileName: "ESP32-DevKitC-32.avif",
    src: esp32,
    alt: "Fotografía de la placa ESP32-DevKitC-32",
  },
  {
    id: "arduino-nano",
    title: "Arduino Nano V3.0",
    fileName: "ARDUINO Nano V3.0.avif",
    src: arduinoNano,
    alt: "Fotografía de la placa Arduino Nano V3.0",
  },
  {
    id: "raspberry-pi-zero",
    title: "Raspberry Pi Zero 2 W",
    fileName: "Raspberry Pi Zero 2 W.avif",
    src: raspberryPiZero,
    alt: "Fotografía de la placa Raspberry Pi Zero 2 W",
  },
];
