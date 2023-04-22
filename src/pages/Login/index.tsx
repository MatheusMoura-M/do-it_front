import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/input";
import { yupResolver } from "@hookform/resolvers/yup";
import LogoSecondary from "../../assets/logo-primary.svg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { SignInData } from "../../types";
import { SignInSchema } from "../../schema";
import { useState } from "react";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInData>({
    resolver: yupResolver(SignInSchema),
  });
  const [loading, setLoading] = useState(false);

  const handleSignIn = (data: SignInData) => console.log(data);

  return (
    <Flex
      p={["10px 15px", "10px 15px", 0, 0]}
      alignItems={"center"}
      justifyContent={"center"}
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color={"white"}
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent={"center"}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"center"}
      >
        <Grid w={["100%", "100%", "50%", "50%"]} pr={"100px"}>
          <Image
            src={LogoSecondary}
            alt="do-it logo"
            boxSize={[120, 120, 150, 150]}
          />
          <Heading mt={4} as="h1">
            o jeito fácil, grátis
          </Heading>
          <Text maxW={350}>
            Flexivel e atrativo de gerenciar
            <b> seus projetos em uma única plataforma</b>
          </Text>
        </Grid>
        <Grid
          onSubmit={handleSubmit(handleSignIn)}
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
            >
              Register
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
