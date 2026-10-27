import { useEffect, useState } from "react";

export type AppRoute = "inventario" | "descargas";

const routeTitles: Record<AppRoute, string> = {
  inventario: "Inventario de componentes",
  descargas: "Descargas",
};

export function getRouteFromHash(hash: string): AppRoute {
  const [segment] = hash
    .replace(/^#\/?/, "")
    .toLocaleLowerCase("es")
    .split(/[/?#]/);

  return segment === "descargas" ? "descargas" : "inventario";
}

export function useHashRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(() =>
    getRouteFromHash(window.location.hash),
  );

  useEffect(() => {
    function handleHashChange() {
      setRoute(getRouteFromHash(window.location.hash));
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `${routeTitles[route]} · Aula de electrónica`;
    document.documentElement.scrollTop = 0;

    const main = document.getElementById("contenido-principal");
    main?.focus({ preventScroll: true });
  }, [route]);

  return route;
}
