import { Box, Container, Text } from "@chakra-ui/react";

export function SiteFooter() {
  return (
    <Box as="footer" borderTopWidth="1px" borderColor="border" bg="bg" mt="4">
      <Container maxW="7xl" px={{ base: "5", md: "8" }} py="6">
        <Text color="fg.muted" fontSize="sm">
          Las cantidades representan el total disponible de todas las unidades
          adquiridas para el laboratorio.
        </Text>
      </Container>
    </Box>
  );
}
