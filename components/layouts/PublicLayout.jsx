import { Box, ChakraProvider} from "@chakra-ui/react";
import Head from "next/head";
// import { ReactNode } from "react";
import Navbar from "../NavBar";
import theme from "@/utils/chakra-theme";
import { useRouter } from "next/router";


export default function PublicLayout({ children }) {

  const router = useRouter()
  return (
    <Box minH={"100vh"} bg={"#042c44"}>
      <Head>
        <title>Terraclean</title>
        <meta name="description" content="YnovPhantomX database utils ! Explore many utils for pentest or hacking !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar/>
        <main>{children}</main>
      </ChakraProvider>
    </Box>
  );
}
