import { Box, Button, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { LuPackageSearch, LuRotateCcw } from "react-icons/lu";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <Box
      borderWidth="1px"
      borderStyle="dashed"
      borderColor="border.emphasized"
      rounded="2xl"
      bg="bg.panel"
      px="6"
      py={{ base: "12", md: "16" }}
      textAlign="center"
    >
      <Stack align="center" gap="4" maxW="md" mx="auto">
        <Box rounded="full" bg="teal.subtle" color="teal.fg" p="4">
          <Icon as={LuPackageSearch} boxSize="8" aria-hidden="true" />
        </Box>
        <Stack gap="2">
          <Heading as="h3" fontSize="xl">
            No encontramos componentes
          </Heading>
          <Text color="fg.muted">
            Prueba con otra búsqueda o elimina algunos filtros para ver más
            resultados.
          </Text>
        </Stack>
        <Button variant="outline" onClick={onClear} minH="11">
          <Icon as={LuRotateCcw} aria-hidden="true" />
          Limpiar filtros
        </Button>
      </Stack>
    </Box>
  );
}
