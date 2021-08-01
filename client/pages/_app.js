import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/poppins/800.css";
import "@fontsource/montserrat";

const theme = extendTheme({
  colors: {
    primary: "#68CCF2",
    secondary: "#FFFFFF",
    buttonRight: "#A8E1F6",
    grey: "#707070",
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
