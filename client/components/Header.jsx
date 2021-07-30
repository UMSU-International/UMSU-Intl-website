import React from "react";
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
import { useRouter } from "next/dist/client/router";
import ContactModal from "./ContactModal";

const Header = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThan968] = useMediaQuery("(min-width: 968px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      fontFamily="body"
      fontSize="1.5rem"
      fontWeight="bold"
      width="100%"
      zIndex="10"
    >
      {isLargerThan968 ? (
        <>
          <Hand
            style={{ marginLeft: "2rem", marginTop: "1rem", cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
          <HStack
            spacing="4rem"
            color="white"
            marginRight="2rem"
            fontFamily="body"
          >
            <Link>
              <Text>ABOUT</Text>
            </Link>
            <Link>
              <Text>EVENTS</Text>
            </Link>
            <Link>
              <Text>GET INVOLVED</Text>
            </Link>
            <Link onClick={onOpen}>
              <Text>CONTACT US</Text>
              <ContactModal isOpen={isOpen} onClose={onClose} />
            </Link>
          </HStack>
        </>
      ) : (
        <>
          <Hand
            style={{
              marginLeft: "1rem",
              marginTop: "1rem",
              cursor: "pointer",
              width: 50,
              height: 50,
            }}
            onClick={() => router.push("/")}
          />
          <HamburgerIcon
            cusor="pointer"
            color="white"
            w={12}
            h={12}
            pos="absolute"
            right={4}
            top={4}
          />
        </>
      )}
    </Box>
  );
};

export default Header;
