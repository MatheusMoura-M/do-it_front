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

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  error: string;
}

function ModalError({ isOpen, onClose, error }: ModalErrorProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Center bg="red.600" w="30px" h="30px" borderRadius="5px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Oops!
          </Text>
        </ModalHeader>
        <ModalCloseButton
          bg="red.600"
          color="white"
          w={"30px"}
          h={"30px"}
          _hover={{ bg: "red.700" }}
          fontWeight="bold"
        />
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Text>
            Ocorreu algum erro! <b>{error}</b>
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            bg="red.600"
            color="white"
            w="100%"
            h="60px"
            _hover={{ bg: "red.700" }}
            onClick={onClose}
          >
            Tentar novamente
          </Button>
          <Text textAlign="center" mt="2">
            Você já pode tentar novamente, <b>clicando</b> no botão acima ou
            aguarde alguns minutos...
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalError;
