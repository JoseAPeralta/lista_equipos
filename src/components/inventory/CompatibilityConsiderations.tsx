import { useState } from "react";
import {
  Badge,
  Box,
  Collapsible,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";
import { platformLabels } from "@/components/inventory/labels";
import type {
  CompatibilityPlatform,
  ComponentCompatibility,
} from "@/types/inventory";

interface CompatibilityConsiderationsProps {
  compatibility: readonly ComponentCompatibility[];
  activePlatform?: CompatibilityPlatform | null;
}

export function CompatibilityConsiderations({
  compatibility,
  activePlatform = null,
}: CompatibilityConsiderationsProps) {
  const [open, setOpen] = useState(Boolean(activePlatform));

  return (
    <Collapsible.Root
      key={activePlatform ?? "closed"}
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
      lazyMount
      unmountOnExit
    >
      <Collapsible.Trigger
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="3"
        minH="11"
        px="3"
        rounded="md"
        bg="bg.subtle"
        _hover={{ bg: "bg.emphasized" }}
      >
        <Text fontSize="sm" fontWeight="semibold">
          {open
            ? "Ocultar consideraciones técnicas"
            : "Ver consideraciones técnicas"}
        </Text>
        <Icon
          as={LuChevronDown}
          aria-hidden="true"
          transform={open ? "rotate(180deg)" : undefined}
          transition="transform 160ms ease"
        />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Stack gap="3" pt="3" pb="1">
          {compatibility.map(({ platform, considerations }) => {
            const isActive = platform === activePlatform;

            return (
              <Box
                key={platform}
                rounded="md"
                borderWidth="1px"
                borderColor={isActive ? "teal.solid" : "border"}
                bg={isActive ? "teal.subtle" : "bg.subtle"}
                px="3.5"
                py="3"
              >
                <Flex align="center" justify="space-between" gap="2">
                  <Text fontSize="sm" fontWeight="bold">
                    {platformLabels[platform]}
                  </Text>
                  {isActive && (
                    <Badge variant="solid" colorPalette="teal" flexShrink="0">
                      Plataforma seleccionada
                    </Badge>
                  )}
                </Flex>
                <Text
                  fontSize="sm"
                  color="fg.muted"
                  lineHeight="tall"
                  mt="1.5"
                >
                  {considerations}
                </Text>
              </Box>
            );
          })}
        </Stack>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}