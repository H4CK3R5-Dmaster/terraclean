import { Box, Image, Center, Text } from "@chakra-ui/react";

export default function BackgroundServ() {
  const handleButtonClick = () => {
    const firstTitle = document.querySelector("#premier-titre");
    if (firstTitle) {
      firstTitle.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      minHeight="100vh"
      bg={`url('/service.png')`}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="40%"
        bg="rgba(0, 0, 0, 0.5)" // Couleur noire avec une transparence de 0.5
      >
        <Box textAlign="left" bottom={0}>
          <Text color="#fff" fontSize={[20, 40]} mt={4} mx={10}>
            Donnez de l $apos; eclat a chaque instant avec notre expertise qui fait
            briller
          </Text>
        </Box>
        <Center>
          <Box mt="20" ml={4}>
            <Image
              src="/icons/down.png"
              alt="Flèche vers le bas"
              boxSize={"60px"}
              cursor="pointer"
              onClick={handleButtonClick}
            />
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
