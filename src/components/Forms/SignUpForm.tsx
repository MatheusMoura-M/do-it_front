import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { iSignUpData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Input } from "../Input";
import { SignUpSchema } from "../../schemas/SignUp";
import { api } from "../../services";
import ModalError from "../Modais/ModalError";
import ModalSuccess from "../Modais/ModalSuccess";
import { useAuth } from "../../contexts/AuthContext";

const SignUpForm = () => {
  const { navigate } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<iSignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const handleSignUp = ({ name, email, password }: iSignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        console.log(response);
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        onModalErrorOpen();
      });
  };

  return (
    <>
      <ModalSuccess
        buttonMessage="Ir para o login agora"
        message="Seu cadastro deu super certo, <b> vamos lá </b>"
        secondaryText="Você já pode começar criando <b> suas listas </b> de tarefas agora mesmo..."
        onClick={() => navigate("/")}
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError isOpen={isModalErrorOpen} onClose={onModalErrorClose} />
      <Grid
        onSubmit={handleSubmit(handleSignUp)}
        as="form"
        mt={[4, 4, 0]}
        w={["100%", "100%", "40%", "40%"]}
        p={"30px 20px"}
        border={"3px solid"}
        borderRadius={5}
        borderColor={"gray.100"}
        bg={"white"}
        color={"gray.900"}
      >
        <Heading size={"lg"}>Crie sua conta</Heading>
        <VStack mt={6} spacing={5}>
          <Input
            placeholder="Digite seu nome"
            icon={FaUser}
            label="Nome"
            error={errors.name}
            {...register("name")}
          />
          <Box w={"100%"}>
            <Input
              placeholder="Digite seu email"
              icon={FaEnvelope}
              error={errors.email}
              type="text"
              {...register("email")}
            />
            {!errors.email && (
              <Text color={"gray.300"} mt={1} ml={1}>
                Exemplo: matheus@gmail.com
              </Text>
            )}
          </Box>
          <Input
            placeholder="Digite sua senha"
            icon={FaLock}
            error={errors.password}
            type="password"
            {...register("password")}
          />
          <Input
            placeholder="Confirme sua senha"
            icon={FaLock}
            label="Confirmação de senha"
            type="password"
            error={errors.confirm_password}
            {...register("confirm_password")}
          />
        </VStack>
        <Button
          mt={"8px"}
          isLoading={loading}
          w={"100%"}
          bg={"purple.800"}
          color={"white"}
          h={"60px"}
          borderRadius={8}
          _hover={{ bg: "purple.900" }}
          type="submit"
        >
          Finalizar cadastro
        </Button>
      </Grid>
    </>
  );
};

export default SignUpForm;
