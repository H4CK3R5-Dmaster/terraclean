import { Box, Image, Center, Text } from "@chakra-ui/react";

export default function Backgroundbanniere() {
  const handleButtonClick = () => {
    const firstTitle = document.querySelector("#premier-titre");
    if (firstTitle) {
      firstTitle.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      minHeight="100vh"
      bg={`url('/fond.png')`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt={14}>
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
            <Text color="#fff" fontSize={[40, 64]} mt={4}>
              Votre vision, notre mission
            </Text>
          </Box>
        </Center>
        <Box
          backgroundPosition="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={"20"}
        >
          <Image
            src="/icons/down.png"
            alt="Flèche vers le bas"
            boxSize={"60px"}
            cursor="pointer"
            onClick={handleButtonClick}
          />
        </Box>
      </Box>
    </Box>
  );
}
