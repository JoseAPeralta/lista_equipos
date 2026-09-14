import { SimpleGrid } from "@chakra-ui/react";
import { ComponentCard } from "@/components/inventory/ComponentCard";
import type {
  CompatibilityPlatform,
  InventoryComponent,
} from "@/types/inventory";

interface ComponentGridProps {
  components: readonly InventoryComponent[];
  activePlatform?: CompatibilityPlatform | null;
}

export function ComponentGrid({
  components,
  activePlatform,
}: ComponentGridProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: "5", lg: "6" }}>
      {components.map((component) => (
        <ComponentCard
          key={component.id}
          component={component}
          activePlatform={activePlatform}
        />
      ))}
    </SimpleGrid>
  );
}
