import { Flex } from "@chakra-ui/react";
import { SignUpInfo } from "./SignUpInfo";
import SignUpForm from "../../components/Forms/SignUpForm";

export const SignUp = () => {
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
        <SignUpForm />
        <SignUpInfo />
      </Flex>
    </Flex>
  );
};
