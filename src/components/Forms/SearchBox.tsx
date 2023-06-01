import { Button, Center, Flex, theme, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useTasks } from "../../contexts/TasksContext";
import { Input } from "../Input";
import ModalCreateTask from "../Modais/ModalCreateTasks";
import { iSearchData } from "../../interfaces";

const SearchBox = () => {
  const { setInputTitleValue } = useTasks();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { register } = useForm<iSearchData>({});

  return (
    <>
      <ModalCreateTask isOpen={isOpen} onClose={onClose} />
      <Flex
        mt="6"
        w="100%"
        paddingX={["4", "8"]}
        paddingY="2"
        paddingBottom="6"
        borderBottomWidth="1px"
        borderColor="gray.50"
        flexDirection={["column", "column", "row", "row"]}
      >
        <Flex as="form">
          <Input
            placeholder="Pesquisar por tarefas"
            w={["100%", "100%", "35vw"]}
            {...register("title")}
            onChange={(e) => setInputTitleValue(e.target.value)}
          />
          <Center
            as="button"
            ml="2"
            w="64px"
            h="60px"
            fontSize="2xl"
            bg="purple.600"
            borderRadius="8px"
          >
            <FaSearch color={theme.colors.white} />
          </Center>
        </Flex>
        <Button
          bg="purple.500"
          color="white"
          paddingX="16"
          ml={["0", "0", "4"]}
          h="60px"
          borderRadius="8px"
          onClick={onOpen}
          _hover={{ bg: "purple.600" }}
          mt={["4", "4", "0"]}
        >
          Adicionar uma nova tarefa
        </Button>
      </Flex>
    </>
  );
};

export default SearchBox;
