import React from "react";
import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Flex
      bg="#fd0000"
      py={4}
      color="white"
      mt={40}
      align="center"
      justify="center"
      direction="column"
    >
      
      <Text textAlign="center" mt={2} fontSize={"medium"}>
        YNOVPHANTOMX TEAM
      </Text>
    </Flex>
  );
};

export default Footer;