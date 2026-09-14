import { Badge, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuCheck, LuMinus, LuTriangleAlert, LuX } from "react-icons/lu";
import { platformLabels } from "@/components/inventory/labels";
import type {
  CompatibilityPlatform,
  CompatibilityStatus,
  ComponentCompatibility,
} from "@/types/inventory";

interface CompatibilityBadgesProps {
  compatibility: readonly ComponentCompatibility[];
  activePlatform?: CompatibilityPlatform | null;
}

interface StatusPresentation {
  label: string;
  colorPalette: string;
  icon: IconType;
}

const statusPresentation: Record<CompatibilityStatus, StatusPresentation> = {
  sí: { label: "Directa", colorPalette: "green", icon: LuCheck },
  "sí, con adaptación": {
    label: "Con adaptación",
    colorPalette: "orange",
    icon: LuTriangleAlert,
  },
  no: { label: "No compatible", colorPalette: "red", icon: LuX },
  "no aplica": { label: "No aplica", colorPalette: "gray", icon: LuMinus },
};

export function CompatibilityBadges({
  compatibility,
  activePlatform,
}: CompatibilityBadgesProps) {
  return (
    <Stack gap="2.5">
      <Text color="fg.muted" fontSize="xs" fontWeight="bold" letterSpacing="wide">
        COMPATIBILIDAD
      </Text>
      {compatibility.map(({ platform, compatible }) => {
        const presentation = statusPresentation[compatible];
        const isActive = platform === activePlatform;

        return (
          <Flex key={platform} align="center" justify="space-between" gap="3">
            <Text
              fontSize="sm"
              color={isActive ? "fg" : "fg.muted"}
              fontWeight={isActive ? "bold" : "normal"}
              minW="0"
            >
              {platformLabels[platform]}
            </Text>
            <Badge
              variant="subtle"
              colorPalette={presentation.colorPalette}
              gap="1"
              flexShrink="0"
            >
              <Icon as={presentation.icon} boxSize="3" aria-hidden="true" />
              {presentation.label}
            </Badge>
          </Flex>
        );
      })}
    </Stack>
  );
}
