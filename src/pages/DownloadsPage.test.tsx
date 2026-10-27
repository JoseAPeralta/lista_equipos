import { render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { DownloadsPage } from "@/pages/DownloadsPage";
import { sampleImages } from "@/data/sample-images";

describe("DownloadsPage", () => {
  it("muestra la descarga del inventario y las imágenes de muestra", () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <DownloadsPage />
      </ChakraProvider>,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: "Descargas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Inventario completo en JSON",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Descargar JSON" }),
    ).toBeInTheDocument();

    for (const image of sampleImages) {
      expect(
        screen.getByRole("link", { name: `Descargar ${image.title}` }),
      ).toHaveAttribute("href", image.src);
    }
  });
});
