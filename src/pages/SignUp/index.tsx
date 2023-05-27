import { Flex } from "@chakra-ui/react";
import { SignUpInfo } from "./SignUpInfo";
import SignUpForm from "../../components/Forms/SignUpForm";
import GoBackButton from "./GoBackButton";

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
        "linear(to-l, purple.800 65%, white 35%)",
        "linear(to-l, purple.800 65%, white 35%)",
      ]}
      color={"white"}
    >
      <Flex
        w={["100%", "100%", "90%", "85%"]}
        justifyContent="center"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]}
        alignItems="center"
      >
        <GoBackButton
          top={["30px", "30px", "90px", "90px"]}
          left={["80%", "80%", "10px", "25px"]}
        />
        <SignUpForm />
        <SignUpInfo />
      </Flex>
    </Flex>
  );
};
