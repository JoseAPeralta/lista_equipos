import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuBoxes, LuCalendarDays, LuCpu, LuPackage } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";

interface SiteHeaderProps {
  componentCount: number;
  totalUnits: number;
  updatedOn: string;
}

interface HeaderStatProps {
  label: string;
  value: string;
  icon: typeof LuBoxes;
}

function HeaderStat({ label, value, icon }: HeaderStatProps) {
  return (
    <Flex
      align="center"
      gap="3"
      rounded="xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.panel"
      px={{ base: "3", md: "4" }}
      py="3"
    >
      <Flex
        align="center"
        justify="center"
        boxSize="9"
        flexShrink="0"
        rounded="lg"
        bg="teal.subtle"
        color="teal.fg"
      >
        <Icon as={icon} boxSize="4.5" aria-hidden="true" />
      </Flex>
      <Box minW="0">
        <Text fontWeight="bold" lineHeight="short" fontVariantNumeric="tabular-nums">
          {value}
        </Text>
        <Text color="fg.muted" fontSize="xs" lineHeight="short" mt="1">
          {label}
        </Text>
      </Box>
    </Flex>
  );
}

function formatInventoryDate(value: string): string {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function SiteHeader({
  componentCount,
  totalUnits,
  updatedOn,
}: SiteHeaderProps) {
  const numberFormatter = new Intl.NumberFormat("es");

  return (
    <Box as="header" bg="bg" borderBottomWidth="1px" borderColor="border">
      <Box
        h="1.5"
        backgroundImage="linear-gradient(90deg, #0d9488 0%, #06b6d4 48%, #f59e0b 100%)"
      />
      <Container maxW="7xl" px={{ base: "5", md: "8" }} py={{ base: "7", md: "10" }}>
        <Flex align="flex-start" justify="space-between" gap="5">
          <Stack gap={{ base: "4", md: "5" }} maxW="4xl">
            <Flex align="center" gap="3">
              <Flex
                align="center"
                justify="center"
                boxSize="10"
                rounded="xl"
                bg="teal.solid"
                color="teal.contrast"
                shadow="sm"
              >
                <Icon as={LuCpu} boxSize="5" aria-hidden="true" />
              </Flex>
              <Text
                color="fg.muted"
                fontSize="sm"
                fontWeight="bold"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                Aula de electrónica
              </Text>
            </Flex>
            <Stack gap="3">
              <Heading
                as="h1"
                fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                letterSpacing="tight"
                lineHeight="1.05"
              >
                Componentes para aprender haciendo
              </Heading>
              <Text
                color="fg.muted"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="tall"
                maxW="3xl"
              >
                Explora el inventario del laboratorio, conoce cada componente y
                revisa con qué plataforma puedes usarlo antes de comenzar tu
                proyecto.
              </Text>
            </Stack>
          </Stack>
          <ColorModeButton
            flexShrink="0"
            size="lg"
            borderWidth="1px"
            borderColor="border"
            bg="bg.panel"
          />
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 3 }} gap="3" mt={{ base: "7", md: "9" }}>
          <HeaderStat
            icon={LuBoxes}
            value={numberFormatter.format(componentCount)}
            label="tipos de componentes"
          />
          <HeaderStat
            icon={LuPackage}
            value={numberFormatter.format(totalUnits)}
            label="unidades registradas"
          />
          <HeaderStat
            icon={LuCalendarDays}
            value={formatInventoryDate(updatedOn)}
            label="última actualización"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
