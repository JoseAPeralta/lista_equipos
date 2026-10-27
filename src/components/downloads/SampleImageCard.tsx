import {
  Box,
  Button,
  Dialog,
  Flex,
  Image,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";
import type { SampleImage } from "@/data/sample-images";

interface SampleImageCardProps {
  image: SampleImage;
}

export function SampleImageCard({ image }: SampleImageCardProps) {
  return (
    <Box
      as="article"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      rounded="xl"
      borderWidth="1px"
      borderColor="border"
      bg="bg.panel"
    >
      <Dialog.Root size="xl">
        <Dialog.Trigger asChild>
          <Button
            variant="plain"
            display="block"
            w="full"
            h="auto"
            p="0"
            rounded="none"
            aria-label={`Ampliar ${image.title}`}
            _hover={{ opacity: 0.9 }}
          >
            <Box aspectRatio="4 / 3" bg="bg.subtle">
              <Image
                src={image.src}
                alt={image.alt}
                w="full"
                h="full"
                objectFit="contain"
                loading="lazy"
              />
            </Box>
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner p="4">
            <Dialog.Content maxW="6xl" w="full" maxH="90dvh" overflowY="auto">
              <Dialog.Header>
                <Dialog.Title>{image.title}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Image
                  src={image.src}
                  alt={image.alt}
                  w="full"
                  maxH="65vh"
                  objectFit="contain"
                  rounded="lg"
                  bg="bg.subtle"
                />
              </Dialog.Body>
              <Dialog.Footer flexWrap="wrap" gap="2">
                <Button asChild colorPalette="teal">
                  <a href={image.src} download={image.fileName}>
                    <LuDownload aria-hidden="true" />
                    Descargar AVIF
                  </a>
                </Button>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cerrar</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger aria-label="Cerrar" />
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

      <Flex align="center" justify="space-between" gap="3" p="4" flex="1">
        <Stack gap="0.5" minW="0">
          <Text fontWeight="semibold" lineHeight="short">
            {image.title}
          </Text>
          <Text color="fg.muted" fontSize="xs" wordBreak="break-word">
            {image.fileName}
          </Text>
        </Stack>
        <Button asChild size="sm" variant="outline" flexShrink="0">
          <a
            href={image.src}
            download={image.fileName}
            aria-label={`Descargar ${image.title}`}
          >
            <LuDownload aria-hidden="true" />
          </a>
        </Button>
      </Flex>
    </Box>
  );
}
