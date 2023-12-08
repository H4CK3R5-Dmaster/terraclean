import { Box, ChakraProvider, Flex} from "@chakra-ui/react";
import Head from "next/head";
// import { ReactNode } from "react";
import Navbar from "../NavBar";
import theme from "@/utils/chakra-theme";
import { useRouter } from "next/router";
export default function DashboardLayout({ children }) {
  return (
    <Box minH={"100vh"} bg={"#042c44"}>
      <Head>
        <title>Terraclean</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Flex p={5}>
          <Flex flexDir="column" w="full">
            <Flex flexDir="column" position="sticky" top={0}>
                
              <main>{children}</main>
            </Flex>
          </Flex>
        </Flex>
      </ChakraProvider>
    </Box>
  );
}
