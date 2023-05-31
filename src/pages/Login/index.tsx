import { Flex } from "@chakra-ui/react";
import LoginInfo from "./LoginInfo";
import LoginForm from "../../components/Forms/LoginForm";

export const Login = () => {
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
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      color={"white"}
    >
      <Flex
        w={"100%"}
        justifyContent={{ base: "center", md: "space-evenly" }}
        flexDirection={["column", "column", "row", "row"]}
        alignItems={"center"}
      >
        <LoginInfo />
        <LoginForm />
      </Flex>
    </Flex>
  );
};
