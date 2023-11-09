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

export default function MakeDevis() {
  return (
    <Box pt={10}  id="premier-titre" bg={"#45c4b0"}>
      <Heading
        as="h2"
        size="2xl"
        textAlign="center"
        mb={4}
        color={"white"}
        pt={"10"}
      >
        Faire un devis
      </Heading>
      <Text color={"white"} px={[10,40]} mb={20}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam
        harum fuga, nulla hic sit aperiam perspiciatis iste facilis, repellendus
        eaque officia velit deserunt animi! Soluta aliquam vero corrupti neque.
      </Text>
      <Box mt={20} pb={20}>
        <Center>
            <NextLink href={"/"} >
                <Button bg={"#042c44"} color={"white"} _hover={{}}>Formulaire &nbsp; <Image src="/icons/form.png" h={8}/></Button>
            </NextLink>
        </Center>
      </Box>

      
    </Box>
  );
}
