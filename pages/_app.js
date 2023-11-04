import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import PublicLayout from '@/components/layouts/PublicLayout';



export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider>

      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>

    </ChakraProvider>
  );
}
