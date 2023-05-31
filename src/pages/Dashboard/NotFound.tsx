import { Box, Center, Heading, Skeleton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SearchBox from "../../components/Forms/SearchBox";
import Header from "../../components/Header";
import ModalTaskDetail from "../../components/Modais/ModalTaskDetail";
import { iTaskCard } from "../../interfaces";

interface NotFoundProps {
  isTaskDetailOpen: boolean;
  onTaskDetailClose: () => void;
  selectedTask: iTaskCard;
  taskNotFound: string;
}

const NotFound = ({
  isTaskDetailOpen,
  onTaskDetailClose,
  selectedTask,
  taskNotFound,
}: NotFoundProps) => {
  return (
    <>
      <ModalTaskDetail
        isOpen={isTaskDetailOpen}
        onClose={onTaskDetailClose}
        task={selectedTask}
      />
      <Box>
        <Header />
        <SearchBox />
        <Center mt="4" textAlign="center" display="flex" flexDirection="column">
          <Heading size={"lg"}>Não encontramos resultados para:</Heading>
          <Text fontSize="xl" color="gray.300" fontWeight="bold">
            {taskNotFound}
          </Text>
          <Box mt="6" w={["80%", "40%"]} p="6" boxShadow="base" bg="white">
            <Stack>
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="80%"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="20px"
                borderRadius="20px"
                w="60%"
              />
            </Stack>
            <Stack mt="5">
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="15px"
              />
              <Skeleton
                startColor="gray.100"
                endColor="gray.200"
                height="15px"
                borderRadius="15px"
              />
            </Stack>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default NotFound;
