import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuDownload, LuFileJson } from "react-icons/lu";
import { downloadInventoryJson } from "@/data/inventory-download";
import { inventoryMetadata } from "@/data/inventory";
import { formatInventoryDate } from "@/utils/format-date";

const numberFormatter = new Intl.NumberFormat("es");

export function InventoryJsonCard() {
  return (
    <Box
      as="section"
      aria-labelledby="descarga-json-title"
      rounded="2xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.panel"
      p={{ base: "5", md: "7" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "stretch", md: "center" }}
        justify="space-between"
        gap="6"
      >
        <Flex align="flex-start" gap="4">
          <Flex
            align="center"
            justify="center"
            boxSize="12"
            flexShrink="0"
            rounded="xl"
            bg="teal.subtle"
            color="teal.fg"
          >
            <Icon as={LuFileJson} boxSize="6" aria-hidden="true" />
          </Flex>
          <Stack gap="1.5">
            <Heading as="h2" id="descarga-json-title" fontSize="xl">
              Inventario completo en JSON
            </Heading>
            <Text color="fg.muted" fontSize="sm" lineHeight="tall" maxW="2xl">
              Archivo fuente con los {inventoryMetadata.productCount} productos,
              las {numberFormatter.format(inventoryMetadata.componentLineCount)}{" "}
              líneas de contenido y la compatibilidad de cada componente.
            </Text>
            <Text color="fg.muted" fontSize="xs">
              Actualizado el {formatInventoryDate(inventoryMetadata.updatedOn)} ·{" "}
              {numberFormatter.format(inventoryMetadata.uniqueComponentCount)}{" "}
              componentes únicos ·{" "}
              {numberFormatter.format(inventoryMetadata.totalUnits)} unidades
            </Text>
          </Stack>
        </Flex>
        <Button
          onClick={downloadInventoryJson}
          colorPalette="teal"
          size="lg"
          alignSelf={{ base: "flex-start", md: "center" }}
          flexShrink="0"
        >
          <LuDownload aria-hidden="true" />
          Descargar JSON
        </Button>
      </Flex>
    </Box>
  );
}
