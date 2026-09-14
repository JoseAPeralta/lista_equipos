import {
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuPackage } from "react-icons/lu";
import { CompatibilityBadges } from "@/components/inventory/CompatibilityBadges";
import { CompatibilityConsiderations } from "@/components/inventory/CompatibilityConsiderations";
import { ComponentMedia } from "@/components/inventory/ComponentMedia";
import { getComponentCategoryLabel } from "@/data/category-rules";
import type {
  CompatibilityPlatform,
  InventoryComponent,
} from "@/types/inventory";

interface ComponentCardProps {
  component: InventoryComponent;
  activePlatform?: CompatibilityPlatform | null;
}

export function ComponentCard({
  component,
  activePlatform,
}: ComponentCardProps) {
  const sourceNames = component.sourceProducts.map(({ name }) => name).join(" · ");

  return (
    <Card.Root
      as="article"
      h="full"
      overflow="hidden"
      bg="bg.panel"
      borderColor="border"
      shadow="xs"
      transition="transform 160ms ease, box-shadow 160ms ease"
      _hover={{ transform: "translateY(-2px)", shadow: "md" }}
    >
      <ComponentMedia componentId={component.id} />
      <Card.Body flex="1">
        <Stack gap="4" h="full">
          <Flex align="flex-start" justify="space-between" gap="2" wrap="wrap">
            <Badge
              variant="subtle"
              colorPalette="teal"
              whiteSpace="normal"
              textAlign="center"
              lineHeight="short"
            >
              {getComponentCategoryLabel(component.category)}
            </Badge>
            <Badge variant="outline" colorPalette="gray" gap="1">
              <Icon as={LuPackage} boxSize="3" aria-hidden="true" />
              {component.amount} {component.amount === 1 ? "disponible" : "disponibles"}
            </Badge>
          </Flex>

          <Box>
            <Heading as="h3" fontSize="xl" lineHeight="short" letterSpacing="tight">
              {component.name.spanish}
            </Heading>
            <Text color="fg.muted" fontSize="sm" mt="1" fontStyle="italic">
              {component.name.english}
            </Text>
          </Box>

          <Text color="fg.muted" fontSize="sm" lineHeight="tall">
            {component.description}
          </Text>

          <Box mt="auto" pt="1">
            <Stack gap="3">
              <CompatibilityBadges
                compatibility={component.compatibility}
                activePlatform={activePlatform}
              />
              <CompatibilityConsiderations
                compatibility={component.compatibility}
                activePlatform={activePlatform}
              />
            </Stack>
          </Box>
        </Stack>
      </Card.Body>
      <Card.Footer borderTopWidth="1px" borderColor="border" bg="bg.subtle">
        <Box minW="0">
          <Text color="fg.muted" fontSize="xs" fontWeight="bold">
            ORIGEN
          </Text>
          <Text fontSize="xs" mt="1">
            {sourceNames}
          </Text>
        </Box>
      </Card.Footer>
    </Card.Root>
  );
}
