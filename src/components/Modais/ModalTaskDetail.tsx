import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaCube, FaTrash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { theme } from "../../styles/theme";
import { iTaskCard } from "../../interfaces";

interface ModalTaskDetailProps {
  isOpen: boolean;
  onClose: () => void;
  task: iTaskCard;
}

function ModalTaskDetail({ isOpen, onClose, task }: ModalTaskDetailProps) {
  const { deleteTask, updateTask } = useTasks();
  const { accessToken, user } = useAuth();

  const handleCompleted = () => {
    updateTask(task.id, user.id, accessToken);
    onClose();
  };

  const handleDeleted = () => {
    deleteTask(task.id, accessToken);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="gray.800">
        <ModalHeader display="flex" justifyContent="space-between">
          <Flex>
            <Center bg="purple.600" w="30px" h="30px" borderRadius="5px">
              <FaCube color={theme.colors.white} />
            </Center>
          </Flex>
          <Text fontWeight="bold" ml="2">
            Visualizar
          </Text>
          <HStack spacing="2">
            <Center
              as="button"
              w="30px"
              h="30px"
              borderWidth="1px"
              borderRadius="5px"
              borderColor="gray.200"
              bgColor="white"
              onClick={() => handleDeleted()}
            >
              <FaTrash color="gray.200" />
            </Center>
            <Center
              as="button"
              w="30px"
              h="30px"
              onClick={() => handleCompleted()}
              borderWidth="1px"
              borderRadius="5px"
              borderColor="gray.200"
              bgColor="white"
            >
              <FaCheck color="gray.200" />
            </Center>
            <Center>
              <ModalCloseButton onClick={onClose} />
            </Center>
          </HStack>
        </ModalHeader>

        <ModalBody>
          <Heading as="h1">{task.title}</Heading>
          <Text>{task.description}</Text>
        </ModalBody>
        <Box padding="6">
          <Progress colorScheme="purple" value={task.completed ? 100 : 10} />
          <Text color="gray.300" mt="3">
            07 March 2021
          </Text>
        </Box>
      </ModalContent>
    </Modal>
  );
}

export default ModalTaskDetail;
