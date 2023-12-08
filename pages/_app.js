import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import PublicLayout from '@/components/layouts/PublicLayout';
import theme from '@/utils/chakra-theme';
import '@/styles/scrollbar.css'
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/layouts/DashboardLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  const getLayout = (children) => {
    if (router.pathname.startsWith('/dashboard')) {
      return (

        <DashboardLayout>{children}</DashboardLayout>

      );
    } else {
      return <PublicLayout>{children}</PublicLayout>;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
