import { Box, Image, Center, Text } from "@chakra-ui/react";

export default function Backgroundbanniere() {
  return (
    <Box >
      <Box
        minHeight="100vh"
        bg={`url('/fond.png')`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <Box textAlign="center">
            <Image
              src="/logo.png"
              alt="Logo"
              boxSize="250px"
              width={"50%"}
              mx="auto"
              borderRadius={"10%"}
            />
            <Text color="#fff" fontSize={[34, 64]} mt={4}>
                Votre vision, notre mission
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
