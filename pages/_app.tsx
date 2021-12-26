import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "constants/theme";
import Navbar from "components/Navbar";
import { Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="600px" margin="auto">
        <Navbar />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
