import { fireEvent, render, screen } from "@testing-library/react";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { EmptyState } from "@/components/inventory/EmptyState";

describe("EmptyState", () => {
  it("muestra el mensaje y limpia los filtros", () => {
    const onClear = vi.fn();
    render(
      <ChakraProvider value={defaultSystem}>
        <EmptyState onClear={onClear} />
      </ChakraProvider>,
    );

    expect(screen.getByText("No encontramos componentes")).toBeInTheDocument();
    expect(
      screen.getByText(/prueba con otra búsqueda/i),
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", { name: /limpiar filtros/i }),
    );
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});