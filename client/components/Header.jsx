import React, { useEffect, useState } from "react";
import {
  HStack,
  Link,
  Text,
  Box,
  useDisclosure,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Hand from "components/svg/Hand";
import HandGrey from "components/svg/HandGrey";
import { useRouter } from "next/dist/client/router";
import ContactModal from "./ContactModal";
import HeaderModal from "./HeaderModal";

const handStyle = {
  marginLeft: "1rem",
  marginTop: "1rem",
  cursor: "pointer",
  zIndex: 1000,
};

const Header = () => {
  const router = useRouter();

  const [isHandGrey, setIsHandGrey] = useState(false);

  useEffect(() => {
    const handleScrollColor = () => {
      if (
        (window.pageYOffset > 550 && isLargerThan968) ||
        (window.pageYOffset > 720 && !isLargerThan968)
      ) {
        setIsHandGrey(true);
      } else {
        setIsHandGrey(false);
      }
    };

    window.addEventListener("scroll", handleScrollColor);
    return () => {
      window.removeEventListener("scroll", handleScrollColor);
    };
  }, []);

  const {
    isOpen: contactIsOpen,
    onOpen: contactOnOpen,
    onClose: contactOnClose,
  } = useDisclosure();

  const {
    isOpen: navIsOpen,
    onOpen: navOnOpen,
    onClose: navOnClose,
  } = useDisclosure();

  const [isLargerThan968] = useMediaQuery("(min-width: 968px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      fontFamily="body"
      fontSize="1.5rem"
      fontWeight="bold"
      width="100%"
      zIndex="1000"
      pos="fixed"
      top="0"
    >
      {isHandGrey ? (
        <HandGrey style={handStyle} onClick={() => router.push("/")} />
      ) : (
        <Hand style={handStyle} onClick={() => router.push("/")} />
      )}

      {isLargerThan968 ? (
        <HStack
          spacing="4rem"
          color={isHandGrey ? "grey" : "white"}
          marginRight="2rem"
          fontFamily="body"
        >
          <Link href="/about">
            <Text>ABOUT</Text>
          </Link>
          <Link href="/events">
            <Text>EVENTS</Text>
          </Link>
          <Link href="/get_involved">
            <Text>GET INVOLVED</Text>
          </Link>
          <Link onClick={contactOnOpen}>
            <Text>CONTACT US</Text>
            <ContactModal isOpen={contactIsOpen} onClose={contactOnClose} />
          </Link>
        </HStack>
      ) : (
        <>
          <Box onClick={navOnOpen} cursor="pointer">
            <HamburgerIcon
              cusor="pointer"
              color={isHandGrey ? "grey" : "white"}
              zIndex="20"
              w={12}
              h={12}
              pos="absolute"
              right={4}
              top={4}
            />
          </Box>

          <HeaderModal isOpen={navIsOpen} onClose={navOnClose} />
        </>
      )}
    </Box>
  );
};

export default Header;
