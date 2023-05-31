import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { iSignInData } from "../../interfaces";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "../../schemas/SignIn";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Input } from "../Input";

const LoginForm = () => {
  const { signIn, navigate } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<iSignInData>({
    resolver: yupResolver(SignInSchema),
  });

  const handleSignIn = (data: iSignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Grid
      onSubmit={handleSubmit(handleSignIn)}
      as="form"
      mt={[4, 4, 0]}
      w={["100%", "100%", "40%", "40%"]}
      maxW={{ base: "unset", md: 400 }}
      minW={{ base: "unset", md: 331 }}
      p={"30px 15px"}
      border={"3px solid"}
      borderRadius={5}
      borderColor={"gray.100"}
      bg={"white"}
      color={"gray.900"}
    >
      <Heading size={"lg"} textAlign={"center"}>
        Bem vindo de volta !
      </Heading>
      <VStack mt={6} spacing={5}>
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
          onClick={() => navigate("/signup")}
        >
          Register
        </Button>
      </VStack>
    </Grid>
  );
};

export default LoginForm;
