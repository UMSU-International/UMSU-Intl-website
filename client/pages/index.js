import { Box, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Header from "components/Header";
import RightWave from "components/svg/RightWave";
import LeftWave from "components/svg/LeftWave";
import Hero from "./Hero";
import About from "./About";
import GloveyWave from "components/svg/GloveyWave";

export default function Home() {
  // TODO: https://github.com/chakra-ui/chakra-ui/issues/3124 fix media query
  const [isLargerThan968] = useMediaQuery("(min-width: 968px)");

  return (
    <Box
      pos="relative"
      w="100%"
      display="flex"
      flexDir="column"
      overflowX="hidden"
      h="2000px"
    >
      <Box
        maxW="100%"
        maxH="100vh"
        display="flex"
        flexDir="column"
        bgColor="primary"
        pos="relative"
        overflow="hidden"
      >
        <LeftWave
          style={{
            position: "absolute",
            top: "-300px",
            left: "-600",
            zIndex: 1,
          }}
        />
        {isLargerThan968 && (
          <RightWave
            style={{
              position: "absolute",
              top: "-815px",
              right: "-531px",
              zIndex: 1,
            }}
          />
        )}

        <Header />
        <Hero />
      </Box>
      <GloveyWave style={{ marginTop: "-35%", zIndex: 10 }} />
      <About />
    </Box>
  );
}
