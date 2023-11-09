import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex
      bg="#042c44"
      py={4}
      color="white"
      borderTop="1px solid black" 
      align="center"
      justify="center"
      direction="column"
    >
      <Text textAlign="center" mt={2} fontSize={"medium"}>
        © 2023 TerraClean - Nettoyage de Terrasse. Tous droits réservés.
      </Text>
    </Flex>
  );
};

export default Footer;
