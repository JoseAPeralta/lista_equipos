import { sampleImages } from "@/data/sample-images";

describe("imágenes de muestra", () => {
  it("incluye las siete imágenes solicitadas con sus nombres originales", () => {
    expect(sampleImages).toHaveLength(7);
    expect(new Set(sampleImages.map(({ fileName }) => fileName)).size).toBe(7);
    expect(sampleImages.map(({ fileName }) => fileName)).toContain(
      "Módulo de Lora.avif",
    );
    expect(sampleImages.every(({ src }) => src.length > 0)).toBe(true);
  });
});
