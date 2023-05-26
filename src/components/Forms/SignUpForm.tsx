import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { iSignUpData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Input } from "../Input";
import { SignUpSchema } from "../../schemas/SignUp";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<iSignUpData>({
    resolver: yupResolver(SignUpSchema),
  });

  const handleSignUp = (data: iSignUpData) => {
    setLoading(true);
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleSignUp)}
      as="form"
      mt={[4, 4, 0]}
      w={["100%", "100%", "40%", "40%"]}
      p={"30px 15px"}
      border={"3px solid"}
      borderRadius={5}
      borderColor={"gray.100"}
      bg={"white"}
      color={"gray.900"}
    >
      <Heading size={"lg"}>Bem vindo de volta !</Heading>
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
      <VStack mt={4} spacing={5}>
        <Button
          isLoading={loading}
          w={"100%"}
          bg={"purple.800"}
          color={"white"}
          h={"60px"}
          borderRadius={8}
          _hover={{ bg: "purple.900" }}
          type="submit"
        >
          Login
        </Button>
        <Text color={"gray.400"}>Ainda não possui uma conta ?</Text>
        <Button
          w={"100%"}
          bg={"gray.100"}
          color={"gray.400"}
          h={"60px"}
          borderRadius={8}
          _hover={{ bg: "gray.200" }}
        >
          Register
        </Button>
      </VStack>
    </Grid>
  );
};

export default SignUpForm;
