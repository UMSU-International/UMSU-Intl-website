import "../styles/globals.css";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#68CCF2",
    secondary: "#FFFFFF",
  },
  fonts: {
    heading: "Poppins",
    body: "Montserrat",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
