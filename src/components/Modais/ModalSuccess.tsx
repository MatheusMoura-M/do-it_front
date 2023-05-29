import {
  Box,
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
  message,
  buttonMessage,
  onClick,
  secondaryText,
}: ModalSuccessProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="2" bg="white" color="gray.800">
        <ModalHeader display="flex">
          <Center bg="purple.600" w="30px" h="30px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Yeesss...
          </Text>
        </ModalHeader>
        <ModalCloseButton
          color={"white"}
          bg={"red.600"}
          w={"30px"}
          h={"30px"}
          fontWeight="bold"
          _hover={{ bg: "red.700" }}
        />
        <ModalBody textAlign="center">
          <Text>
            <Box
              dangerouslySetInnerHTML={{
                __html: message,
              }}
            />
          </Text>
        </ModalBody>
        <ModalFooter flexDir="column">
          <Button
            bg="purple.500"
            color="white"
            w="100%"
            h="60px"
            onClick={onClick}
            _hover={{ bg: "puprle.600" }}
          >
            {buttonMessage}
          </Button>
          <Text align="center" mt="4">
            <Box
              dangerouslySetInnerHTML={{
                __html: secondaryText,
              }}
            />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalSuccess;
