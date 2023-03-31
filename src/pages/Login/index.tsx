import { Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import LogoSecondary from "../../assets/logo-secondary.svg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { SignInData } from "../../types";
import { SignInSchema } from "../../schema";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(SignInSchema),
  });

  return (
    <Flex
      alignItems={"center"}
      height={"100vh"}
      bgGradient={"linear(to-r, purple.800 65%, white 35%)"}
      color={"white"}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
      >
        <Grid w={"100%"} pr={"100px"}>
          <Image src={LogoSecondary} />
          <Heading as="h1">o jeito fácil, grátis</Heading>
          <Text>
            Flexivel e atrativo de gerenciar{" "}
            <b>seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          mt={4}
          w={"100%"}
          p={"30px 15px"}
          border={"3px solid"}
          borderColor={"gray.100"}
          bg={"white"}
          color={"gray.900"}
        >
          <Heading size={"lg"}>Bem vindo de volta !</Heading>
          <VStack mt={6} spacing={5}>
            <Input
              placeholder="Digite seu email"
              icon={FaEnvelope}
              name="email"
            ></Input>
            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              {...register("password")}
            ></Input>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
