import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  buttonMessage: string;
  message: string;
  onClick: () => void;
  secondaryText: string;
}

function ModalSuccess({
  isOpen,
  onClose,
  buttonMessage,
  message,
  onClick,
  secondaryText,
}: ModalSuccessProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="gray.800">
        <ModalHeader display="flex">
          <Center bg="purple.600" w="30px" h="30px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            yeesss...
          </Text>
        </ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody textAlign="center">
          <Text>{message}</Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            bg="purple.500"
            color="white"
            w="100%"
            onClick={onClick}
            h="60px"
            _hover={{ bg: "puprle.600" }}
          >
            {buttonMessage}
          </Button>
          <Text align="center" mt="4">
            {secondaryText}
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalSuccess;
