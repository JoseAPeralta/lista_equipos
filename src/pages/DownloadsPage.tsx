import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { InventoryJsonCard } from "@/components/downloads/InventoryJsonCard";
import { SampleImageCard } from "@/components/downloads/SampleImageCard";
import { sampleImages } from "@/data/sample-images";

export function DownloadsPage() {
  return (
    <Container
      as="main"
      id="contenido-principal"
      tabIndex={-1}
      outline="none"
      maxW="7xl"
      px={{ base: "5", md: "8" }}
      py={{ base: "7", md: "10" }}
    >
      <Stack gap={{ base: "8", md: "10" }}>
        <Box>
          <Text
            color="teal.fg"
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            Recursos del laboratorio
          </Text>
          <Heading
            as="h1"
            mt="2"
            fontSize={{ base: "3xl", md: "4xl" }}
            letterSpacing="tight"
            lineHeight="1.1"
          >
            Descargas
          </Heading>
          <Text
            color="fg.muted"
            fontSize={{ base: "md", md: "lg" }}
            lineHeight="tall"
            mt="3"
            maxW="3xl"
          >
            Descarga el inventario completo en JSON y consulta las imágenes de
            referencia de los kits y las placas del laboratorio.
          </Text>
        </Box>

        <InventoryJsonCard />

        <Box as="section" aria-labelledby="imagenes-muestra-title">
          <Stack gap="5">
            <Box>
              <Heading
                as="h2"
                id="imagenes-muestra-title"
                fontSize="2xl"
                scrollMarginTop="4"
              >
                Imágenes de muestra
              </Heading>
              <Text color="fg.muted" fontSize="sm" mt="1" maxW="3xl">
                {sampleImages.length} imágenes de referencia. Pulsa una imagen
                para verla en detalle y usa su botón de descarga para guardar el
                archivo AVIF original.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="5">
              {sampleImages.map((image) => (
                <SampleImageCard key={image.id} image={image} />
              ))}
            </SimpleGrid>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
