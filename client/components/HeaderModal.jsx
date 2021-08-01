import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  VStack,
  Link,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import HandGrey from "components/svg/HandGrey";
import FB from "components/svg/FB";
import Insta from "components/svg/Insta";
import Youtube from "components/svg/Youtube";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        maxWidth="100vw"
        width="100vw"
        height="100vh"
        pos="relative"
        mt="0"
        borderRadius="0"
      >
        <HandGrey
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 10,
          }}
        />
        <ModalCloseButton
          bgColor="secondary"
          fontSize="20px"
          color="grey"
          width="60px"
          height="60px"
          pos="absolute"
          _hover={{}}
        />
        <ModalBody fontFamily="body" px="5rem" height="100% ">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <VStack spacing={12} fontSize="xl">
              <Link href="/about">
                <Text>ABOUT</Text>
              </Link>
              <Link href="/events">
                <Text>EVENTS</Text>
              </Link>
              <Link href="/get_involved">
                <Text>GET INVOLVED</Text>
              </Link>
              <Link>
                <Text>CONTACT US</Text>
                {/* <ContactModal isOpen={contactIsOpen} onClose={contactOnClose} /> */}
              </Link>
            </VStack>
          </Box>
          <HStack
            position="absolute"
            bottom="10%"
            spacing={8}
            left="50%"
            transform="translateX(-50%)"
          >
            <a target="_blank" href="https://www.facebook.com/UMSUintl">
              <FB fill="#707070" />
            </a>
            <a target="_blank" href="https://www.instagram.com/umsuintl/">
              <Insta fill="#707070" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCuO1gZ9BhWxAdfhECXZ84mQ"
            >
              <Youtube fill="#707070" />
            </a>
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
