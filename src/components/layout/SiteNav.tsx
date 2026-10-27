import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { LuCpu } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";
import type { AppRoute } from "@/hooks/use-hash-route";

interface SiteNavProps {
  route: AppRoute;
}

const navItems = [
  { route: "inventario", label: "Inventario", href: "#/inventario" },
  { route: "descargas", label: "Descargas", href: "#/descargas" },
] as const satisfies ReadonlyArray<{
  route: AppRoute;
  label: string;
  href: string;
}>;

export function SiteNav({ route }: SiteNavProps) {
  return (
    <Box
      as="nav"
      aria-label="Navegación principal"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="7xl" px={{ base: "5", md: "8" }}>
        <Flex align="center" justify="space-between" gap="4" minH="14">
          <Link
            href="#/inventario"
            display="flex"
            alignItems="center"
            gap="2.5"
            color="fg"
            _hover={{ textDecoration: "none", color: "teal.fg" }}
            aria-label="Aula de electrónica, ir al inventario"
          >
            <Flex
              align="center"
              justify="center"
              boxSize="8"
              flexShrink="0"
              rounded="lg"
              bg="teal.solid"
              color="teal.contrast"
            >
              <Icon as={LuCpu} boxSize="4.5" aria-hidden="true" />
            </Flex>
            <Text
              display={{ base: "none", sm: "block" }}
              fontSize="sm"
              fontWeight="bold"
              letterSpacing="0.04em"
            >
              Aula de electrónica
            </Text>
          </Link>

          <Flex align="center" gap="2">
            <Flex as="ul" listStyleType="none" align="center" gap="1">
              {navItems.map((item) => {
                const isActive = route === item.route;

                return (
                  <li key={item.route}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      display="inline-flex"
                      alignItems="center"
                      rounded="md"
                      px={{ base: "2.5", sm: "3" }}
                      py="2"
                      fontSize="sm"
                      fontWeight="semibold"
                      color={isActive ? "teal.fg" : "fg.muted"}
                      bg={isActive ? "teal.subtle" : "transparent"}
                      _hover={{
                        textDecoration: "none",
                        color: "teal.fg",
                        bg: "teal.subtle",
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </Flex>
            <ColorModeButton size="sm" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
