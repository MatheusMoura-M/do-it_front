import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

interface GoBackButtonProps {
  top: string[];
  left: string[];
}

function GoBackButton({ top, left }: GoBackButtonProps) {
  const { navigate } = useAuth();
  return (
    <Center
      as="button"
      position="absolute"
      top={top}
      left={left}
      w={["60px", "80px", "60px", "80px"]}
      h="60px"
      backgroundColor="purple.500"
      fontSize="2xl"
      borderRadius="md"
      _hover={{ bg: "purple.600" }}
      onClick={() => navigate("/")}
    >
      <FaArrowLeft color={"white"} />
    </Center>
  );
}

export default GoBackButton;
