import {
    Box,
    Grid,
    Heading,
    Text,
    Image,
    Center,
    Divider,
    Button,
  } from "@chakra-ui/react";
  import NextLink from 'next/link'

export default function Contactmod() {
  return (
    <Box pt={10} id="premier-titre" bg={"#042c44"}>
      <Heading
        as="h2"
        size="2xl"
        textAlign="center"
        mb={4}
        color={"white"}
        pt={"10"}
      >
        Contactez nous
      </Heading>
      <Text color={"white"} px={[10,40]} mb={20}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam
        harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus
        eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque.
      </Text>
      <Box mt={20} pb={20}>
        <Center>
            <NextLink href={"/"} >
                <Button bg={"#45c4b0"} color={"#042c44"} _hover={{}}>Contactez nous</Button>
            </NextLink>
        </Center>
      </Box>
      
    </Box>
  );
}
