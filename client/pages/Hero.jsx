import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Slide,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import GradientButton from "components/GradientButton";
import FB from "components/svg/FB";
import Insta from "components/svg/Insta";
import Youtube from "components/svg/Youtube";

const Hero = () => {
  const [isLargerThan968] = useMediaQuery("(min-width: 968px)");

  return (
    <Box
      color="white"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="flex-start"
      mt={isLargerThan968 ? "140px" : "200px"}
      h="100vh"
      // maxH="100vh"
      pos="relative"
      zIndex="1"
    >
      <Heading
        as="h1"
        fontFamily="heading"
        fontSize={isLargerThan968 ? "80px" : "48px"}
        fontWeight="800"
        textAlign="center"
        lineHeight="1.1"
      >
        UMSU International
      </Heading>
      <Text
        fontSize={isLargerThan968 ? "2rem" : "1.25rem"}
        overflowWrap="wrap"
        width={isLargerThan968 ? "50%" : "65%"}
        fontWeight="bold"
        textAlign="center"
        mb="8"
        mt="2"
      >
        the official {isLargerThan968 ? "representatives" : "rep."} of all
        International students in the University of Melbourne
      </Text>

      <GradientButton>WHO ARE WE?</GradientButton>
      {isLargerThan968 && (
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
      )}
    </Box>
  );
};

export default Hero;
