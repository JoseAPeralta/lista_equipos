import { useRef } from "react";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ComponentGrid } from "@/components/inventory/ComponentGrid";
import { EmptyState } from "@/components/inventory/EmptyState";
import { InventoryFilters } from "@/components/inventory/InventoryFilters";
import { InventoryPagination } from "@/components/inventory/InventoryPagination";
import { componentCategories } from "@/data/category-rules";
import { inventoryComponents, inventoryMetadata } from "@/data/inventory";
import { useInventory, type InventoryPageSize } from "@/hooks/use-inventory";

function App() {
  const inventory = useInventory(inventoryComponents);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);

  function focusResults() {
    requestAnimationFrame(() => {
      resultsHeadingRef.current?.focus({ preventScroll: true });
      resultsHeadingRef.current?.scrollIntoView({ block: "start" });
    });
  }

  function handlePageChange(page: number) {
    inventory.setPage(page);
    focusResults();
  }

  function handlePageSizeChange(pageSize: InventoryPageSize) {
    inventory.setPageSize(pageSize);
    focusResults();
  }

  return (
    <Box minH="100dvh" bg="bg.subtle" color="fg">
      <SiteHeader
        componentCount={inventoryMetadata.uniqueComponentCount}
        totalUnits={inventoryMetadata.totalUnits}
        updatedOn={inventoryMetadata.updatedOn}
      />

      <Container
        as="main"
        id="contenido-principal"
        maxW="7xl"
        px={{ base: "5", md: "8" }}
        py={{ base: "7", md: "10" }}
      >
        <Stack gap={{ base: "7", md: "9" }}>
          <InventoryFilters
            filters={inventory.filters}
            categories={componentCategories}
            platforms={inventoryMetadata.platforms}
            totalResults={inventory.totalResults}
            hasActiveFilters={inventory.hasActiveFilters}
            onSearchChange={inventory.setSearch}
            onCategoryChange={inventory.setCategory}
            onPlatformChange={inventory.setPlatform}
            onIncludeAdaptedChange={inventory.setIncludeAdapted}
            onReset={inventory.resetFilters}
          />

          <Box as="section" aria-labelledby="inventory-results-title">
            <Stack gap="5">
              <Box>
                <Heading
                  ref={resultsHeadingRef}
                  id="inventory-results-title"
                  as="h2"
                  fontSize="2xl"
                  tabIndex={-1}
                  scrollMarginTop="4"
                >
                  Componentes disponibles
                </Heading>
                <Text color="fg.muted" fontSize="sm" mt="1">
                  Información técnica y compatibilidad para planear tus prácticas.
                </Text>
              </Box>

              {inventory.totalResults > 0 ? (
                <ComponentGrid
                  components={inventory.visibleComponents}
                  activePlatform={inventory.filters.platform}
                />
              ) : (
                <EmptyState onClear={inventory.resetFilters} />
              )}
            </Stack>
          </Box>

          {inventory.totalResults > 0 && (
            <InventoryPagination
              page={inventory.page}
              pageSize={inventory.pageSize}
              totalPages={inventory.totalPages}
              totalResults={inventory.totalResults}
              rangeStart={inventory.rangeStart}
              rangeEnd={inventory.rangeEnd}
              canGoPrevious={inventory.canGoPrevious}
              canGoNext={inventory.canGoNext}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          )}
        </Stack>
      </Container>

      <Box as="footer" borderTopWidth="1px" borderColor="border" bg="bg" mt="4">
        <Container maxW="7xl" px={{ base: "5", md: "8" }} py="6">
          <Text color="fg.muted" fontSize="sm">
            Las cantidades representan el total disponible de todas las unidades
            adquiridas para el laboratorio.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
