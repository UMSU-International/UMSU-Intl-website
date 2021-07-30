import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";
import Header from "components/Header";
import RightWave from "components/svg/RightWave";
import LeftWave from "components/svg/LeftWave";
import Hero from "./Hero";
import DividerWave from "components/svg/DividerWave";

export default function Home() {
  return (
    <Box
      maxW="100%"
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

      <RightWave
        style={{
          position: "absolute",
          top: "-815px",
          right: "-531px",
          zIndex: 1,
        }}
      />
      <Header />
      <Hero />
    </Box>
  );
}
