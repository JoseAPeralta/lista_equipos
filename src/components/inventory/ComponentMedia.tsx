import { useState } from "react";
import { Box, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { LuImage } from "react-icons/lu";
import { getComponentImage } from "@/data/component-images";

interface ComponentMediaProps {
  componentId: string;
}

export function ComponentMedia({ componentId }: ComponentMediaProps) {
  const image = getComponentImage(componentId);
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <Box
      data-component-id={componentId}
      aspectRatio="4 / 3"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="teal.subtle"
      borderBottomWidth="1px"
      borderColor="border"
      overflow="hidden"
    >
      {showImage && image ? (
        <Image
          src={image.src}
          alt={image.alt}
          width="full"
          height="full"
          objectFit="contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <Stack
          align="center"
          gap="2"
          color="teal.fg"
          aria-hidden="true"
          pointerEvents="none"
        >
          <Icon as={LuImage} boxSize="8" aria-hidden="true" />
          <Text fontSize="xs" fontWeight="semibold">
            Imagen próximamente
          </Text>
        </Stack>
      )}
    </Box>
  );
}