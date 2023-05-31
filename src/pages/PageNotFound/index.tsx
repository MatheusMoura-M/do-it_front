import { Button, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import notfound from "../../assets/notfound.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const PageNotFound = () => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      alignItems="center"
      justifyContent="space-evenly"
      height={["auto", "auto", "100vh", "100vh"]}
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    >
      <Box>
        <Heading>Oooops!</Heading>
        <Text mt="4">
          Não encontramos a página que você procurou, <br />
          <b>Vamos tentar novamente.</b>
        </Text>
        <Button
          mt="4"
          bg="red.600"
          h="60px"
          color="white"
          w="100%"
          _hover={{ bg: "red.700" }}
          onClick={() => (accessToken ? navigate("/dashboard") : navigate("/"))}
        >
          Ir para as minhas tarefas
        </Button>
      </Box>
      <Image src={notfound} />
    </Flex>
  );
};
