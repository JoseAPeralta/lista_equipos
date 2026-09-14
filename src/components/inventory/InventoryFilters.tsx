import {
  Box,
  Button,
  Checkbox,
  Field,
  Flex,
  Heading,
  Icon,
  Input,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuRotateCcw, LuSearch, LuSlidersHorizontal } from "react-icons/lu";
import type { InventoryFilters as InventoryFiltersState } from "@/hooks/use-inventory";
import type {
  CompatibilityPlatform,
  ComponentCategory,
} from "@/types/inventory";

interface CategoryOption {
  value: ComponentCategory;
  label: string;
}

interface InventoryFiltersProps {
  filters: InventoryFiltersState;
  categories: readonly CategoryOption[];
  platforms: readonly CompatibilityPlatform[];
  totalResults: number;
  hasActiveFilters: boolean;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: ComponentCategory | null) => void;
  onPlatformChange: (value: CompatibilityPlatform | null) => void;
  onIncludeAdaptedChange: (value: boolean) => void;
  onReset: () => void;
}

export function InventoryFilters({
  filters,
  categories,
  platforms,
  totalResults,
  hasActiveFilters,
  onSearchChange,
  onCategoryChange,
  onPlatformChange,
  onIncludeAdaptedChange,
  onReset,
}: InventoryFiltersProps) {
  return (
    <Box
      as="form"
      role="search"
      aria-labelledby="inventory-filters-title"
      onSubmit={(event) => event.preventDefault()}
      rounded="2xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.panel"
      p={{ base: "4", md: "6" }}
      shadow="xs"
    >
      <Stack gap="5">
        <Flex align="center" gap="2">
          <Icon as={LuSlidersHorizontal} color="teal.fg" aria-hidden="true" />
          <Heading id="inventory-filters-title" as="h2" fontSize="md">
            Encuentra el componente adecuado
          </Heading>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="4">
          <Field.Root>
            <Field.Label>Buscar</Field.Label>
            <Box position="relative">
              <Icon
                as={LuSearch}
                position="absolute"
                left="3.5"
                top="50%"
                transform="translateY(-50%)"
                color="fg.muted"
                pointerEvents="none"
                zIndex="1"
                aria-hidden="true"
              />
              <Input
                value={filters.search}
                onChange={(event) => onSearchChange(event.currentTarget.value)}
                placeholder="Nombre o descripción"
                ps="10"
                minH="11"
              />
            </Box>
          </Field.Root>

          <Field.Root>
            <Field.Label>Tipo de componente</Field.Label>
            <NativeSelect.Root size="lg">
              <NativeSelect.Field
                value={filters.category ?? ""}
                onChange={(event) =>
                  onCategoryChange(
                    (event.currentTarget.value || null) as ComponentCategory | null,
                  )
                }
                aria-label="Tipo de componente"
              >
                <option value="">Todos los tipos</option>
                {categories.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>

          <Field.Root>
            <Field.Label>Plataforma compatible</Field.Label>
            <NativeSelect.Root size="lg">
              <NativeSelect.Field
                value={filters.platform ?? ""}
                onChange={(event) =>
                  onPlatformChange(
                    (event.currentTarget.value || null) as CompatibilityPlatform | null,
                  )
                }
                aria-label="Plataforma compatible"
              >
                <option value="">Todas las plataformas</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>
        </SimpleGrid>

        <Flex
          align={{ base: "stretch", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap="4"
          pt="1"
        >
          <Box>
            <Checkbox.Root
              checked={filters.includeAdapted}
              disabled={!filters.platform}
              onCheckedChange={(event) =>
                onIncludeAdaptedChange(event.checked === true)
              }
              colorPalette="orange"
              minH="11"
            >
              <Checkbox.HiddenInput
                aria-describedby={
                  filters.platform ? undefined : "include-adapted-help"
                }
              />
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Label>
                Incluir componentes que requieren adaptación
              </Checkbox.Label>
            </Checkbox.Root>
            {!filters.platform && (
              <Text
                id="include-adapted-help"
                color="fg.muted"
                fontSize="xs"
                ms="7"
                mt="-1"
              >
                Selecciona una plataforma para activar esta opción.
              </Text>
            )}
          </Box>

          <Flex align="center" justify="space-between" gap="3">
            <Text color="fg.muted" fontSize="sm" aria-live="polite">
              {totalResults} {totalResults === 1 ? "resultado" : "resultados"}
            </Text>
            <Button
              type="button"
              variant="ghost"
              onClick={onReset}
              disabled={!hasActiveFilters}
              minH="11"
            >
              <Icon as={LuRotateCcw} aria-hidden="true" />
              Limpiar
            </Button>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
}
