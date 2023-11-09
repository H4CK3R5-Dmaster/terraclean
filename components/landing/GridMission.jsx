import {
    Box,
    Grid,
    Heading,
    Text,
    Image,
    Center,
    Divider,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  
  export default function GridMission({ data, title, description }) {
    return (
      <Box pt={20}  id="premier-titre" bg={"#042c44"}>
        <Heading
          as="h2"
          size="2xl"
          textAlign="center"
          mb={4}
          color={"white"}
          pt={"10"}
        >
          {title}
        </Heading>
        <Text color={"white"} px={[10,40]} mb={20}>
          {description}
        </Text>
  
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gap={6}
          mx={[10, 20]}
          
        >
          {data.map((item, index) => (
            <Box key={index} color={"white"} p={8} mb={20}>
                {item?.image ? (
                    <Center>
                        <Image src={item.image}/>
                    </Center>
                ):("")}
              <Center>
                <Heading as="h1" size="md" mt={8} fontSize={24}>
                  {item.title}
                </Heading>
              </Center>
              <Center>
                <Text mt={2} justifyContent={"center"} mx={10}>
                  {item.description}
                </Text>
              </Center>
              {/* {index !== 0 && (
                <Divider orientation="vertical" color={"#45c4b0"} height="100%" />
              )} */}
            </Box>
          ))}
        </Grid>
      </Box>
    );
  }
  