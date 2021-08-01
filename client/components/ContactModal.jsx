import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import GradientButton from "./GradientButton";
import GloveyContact from "components/svg/GloveyContact";

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="25%"
        maxWidth="600px"
        width="600px"
        pos="relative"
      >
        <ModalHeader
          textAlign="center"
          fontFamily="heading"
          fontWeight="bold"
          fontSize="2rem"
        >
          Chat with our reps!
        </ModalHeader>
        <ModalCloseButton
          bgColor="primary"
          borderRadius="50%"
          fontSize="20px"
          color="secondary"
          width="60px"
          height="60px"
          pos="absolute"
          right="4"
          top="4"
          _hover={{}}
        />
        <ModalBody fontFamily="body" px="5rem">
          <Box textAlign="center">
            We will get back to you within one to two days through email. Also
            please don’t forget to check your spam folder just in case!
          </Box>
          <VStack>
            <FormControl isRequired>
              <FormLabel requiredIndicator>Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel type="email">Email</FormLabel>
              <Input placeholder="Enter your email" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input placeholder="Enter the subject of your enquiry" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Hi UMSU International" />
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter display="flex" alignItems="center" justifyContent="center">
          <GradientButton
            marginTop="0"
            bgColor="primary"
            color="black"
            _hover={{}}
          >
            SUBMIT
          </GradientButton>
        </ModalFooter>
        <GloveyContact
          style={{
            position: "absolute",
            bottom: -120,
            left: -150,
          }}
        />
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
