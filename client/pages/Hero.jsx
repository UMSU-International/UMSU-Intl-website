import React, { useEffect } from "react";
import { Box, Heading, Slide, Text, VStack } from "@chakra-ui/react";
import GloveyFly from "components/svg/GloveyFly";
import GradientButton from "components/GradientButton";
import FB from "components/svg/FB";
import Insta from "components/svg/Insta";
import Youtube from "components/svg/Youtube";
import DividerWave from "components/svg/DividerWave";
import GloveyWave from "components/svg/GloveyWave";

const Hero = () => {
  return (
    <Box
      color="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      mt="80px"
      h="100vh"
      pos="relative"
      zIndex="1"
    >
      <Heading
        as="h1"
        fontFamily="heading"
        fontSize="80px"
        fontWeight="800"
        textAlign="center"
      >
        UMSU International
      </Heading>
      <Text fontSize="2rem" overflowWrap="wrap" width="50%" textAlign="center">
        the official representative of all International students in the
        University of Melbourne
      </Text>
      <GradientButton>WHO ARE WE?</GradientButton>
      {/* <GloveyFly
        style={{ zIndex: 10, marginTop: "-95px", marginLeft: "-420px" }}
      />
      <DividerWave style={{ position: "absolute", bottom: -130 }} /> */}
      <GloveyWave style={{ position: "absolute", bottom: 0 }} />
      <VStack position="absolute" right="4" top="0" spacing={8}>
        <a target="_blank" href="https://www.facebook.com/UMSUintl">
          <FB />
        </a>
        <a target="_blank" href="https://www.instagram.com/umsuintl/">
          <Insta />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCuO1gZ9BhWxAdfhECXZ84mQ"
        >
          <Youtube />
        </a>
      </VStack>
    </Box>
  );
};

export default Hero;
