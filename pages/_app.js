import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import PublicLayout from '@/components/layouts/PublicLayout';
import theme from '@/utils/chakra-theme';
import'@/styles/scrollbar.css'

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>

      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>

    </ChakraProvider>
  );
}
