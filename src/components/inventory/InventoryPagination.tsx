import {
  Button,
  Field,
  Flex,
  HStack,
  Icon,
  NativeSelect,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import {
  inventoryPageSizes,
  type InventoryPageSize,
} from "@/hooks/use-inventory";

interface InventoryPaginationProps {
  page: number;
  pageSize: InventoryPageSize;
  totalPages: number;
  totalResults: number;
  rangeStart: number;
  rangeEnd: number;
  canGoPrevious: boolean;
  canGoNext: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: InventoryPageSize) => void;
}

type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

function getPaginationItems(page: number, totalPages: number): PaginationItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (page <= 4) {
    return [1, 2, 3, 4, 5, "end-ellipsis", totalPages];
  }

  if (page >= totalPages - 3) {
    return [
      1,
      "start-ellipsis",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "start-ellipsis",
    page - 1,
    page,
    page + 1,
    "end-ellipsis",
    totalPages,
  ];
}

export function InventoryPagination({
  page,
  pageSize,
  totalPages,
  totalResults,
  rangeStart,
  rangeEnd,
  canGoPrevious,
  canGoNext,
  onPageChange,
  onPageSizeChange,
}: InventoryPaginationProps) {
  const paginationItems = getPaginationItems(page, totalPages);

  return (
    <Stack
      as="nav"
      aria-label="Paginación del inventario"
      gap="4"
      rounded="2xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.panel"
      p={{ base: "4", md: "5" }}
    >
      <Flex
        align={{ base: "flex-start", sm: "center" }}
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
        gap="3"
      >
        <Text
          color="fg.muted"
          fontSize="sm"
          fontVariantNumeric="tabular-nums"
          aria-live="polite"
          aria-atomic="true"
        >
          Página {page} de {totalPages}. Mostrando {rangeStart}–{rangeEnd} de{" "}
          {totalResults}
        </Text>
        <Field.Root orientation="horizontal" width="auto">
          <Field.Label htmlFor="inventory-page-size" color="fg.muted" fontSize="sm">
            Por página
          </Field.Label>
          <NativeSelect.Root size="lg" width="24">
            <NativeSelect.Field
              id="inventory-page-size"
              value={pageSize}
              onChange={(event) => {
                const nextPageSize = Number(event.currentTarget.value);
                if (
                  inventoryPageSizes.includes(nextPageSize as InventoryPageSize)
                ) {
                  onPageSizeChange(nextPageSize as InventoryPageSize);
                }
              }}
              aria-label="Componentes por página"
            >
              {inventoryPageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Field.Root>
      </Flex>

      <Flex align="center" justify="center" gap="2">
        <Button
          variant="outline"
          onClick={() => onPageChange(page - 1)}
          disabled={!canGoPrevious}
          minH="11"
          px={{ base: "3", sm: "4" }}
          aria-label="Ir a la página anterior"
        >
          <Icon as={LuChevronLeft} aria-hidden="true" />
          <Text as="span" display={{ base: "none", sm: "inline" }}>
            Anterior
          </Text>
        </Button>

        <HStack display={{ base: "none", md: "flex" }} gap="1">
          {paginationItems.map((item) =>
            typeof item === "number" ? (
              <Button
                key={item}
                variant={item === page ? "solid" : "ghost"}
                colorPalette={item === page ? "teal" : "gray"}
                onClick={() => onPageChange(item)}
                minW="11"
                minH="11"
                px="0"
                aria-label={`Ir a la página ${item}`}
                aria-current={item === page ? "page" : undefined}
              >
                {item}
              </Button>
            ) : (
              <Text key={item} color="fg.muted" px="1" aria-hidden="true">
                …
              </Text>
            ),
          )}
        </HStack>

        <Text
          display={{ base: "block", md: "none" }}
          color="fg.muted"
          fontSize="sm"
          minW="20"
          textAlign="center"
          fontVariantNumeric="tabular-nums"
        >
          {page} de {totalPages}
        </Text>

        <Button
          variant="outline"
          onClick={() => onPageChange(page + 1)}
          disabled={!canGoNext}
          minH="11"
          px={{ base: "3", sm: "4" }}
          aria-label="Ir a la página siguiente"
        >
          <Text as="span" display={{ base: "none", sm: "inline" }}>
            Siguiente
          </Text>
          <Icon as={LuChevronRight} aria-hidden="true" />
        </Button>
      </Flex>
    </Stack>
  );
}
