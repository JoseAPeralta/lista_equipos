import { render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { SiteNav } from "@/components/layout/SiteNav";

describe("SiteNav", () => {
  it("marca la página actual y enlaza ambas secciones", () => {
    render(
      <ChakraProvider value={defaultSystem}>
        <SiteNav route="descargas" />
      </ChakraProvider>,
    );

    const inventoryLink = screen.getByRole("link", { name: "Inventario" });
    const downloadsLink = screen.getByRole("link", { name: "Descargas" });

    expect(inventoryLink).toHaveAttribute("href", "#/inventario");
    expect(inventoryLink).not.toHaveAttribute("aria-current");
    expect(downloadsLink).toHaveAttribute("href", "#/descargas");
    expect(downloadsLink).toHaveAttribute("aria-current", "page");
  });
});
