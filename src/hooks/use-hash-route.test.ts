import { getRouteFromHash } from "@/hooks/use-hash-route";

describe("getRouteFromHash", () => {
  it("reconoce la página de descargas", () => {
    expect(getRouteFromHash("#/descargas")).toBe("descargas");
    expect(getRouteFromHash("#descargas")).toBe("descargas");
    expect(getRouteFromHash("#/DESCARGAS/")).toBe("descargas");
  });

  it("usa el inventario como ruta predeterminada", () => {
    expect(getRouteFromHash("")).toBe("inventario");
    expect(getRouteFromHash("#/inventario")).toBe("inventario");
    expect(getRouteFromHash("#/otra")).toBe("inventario");
  });
});
