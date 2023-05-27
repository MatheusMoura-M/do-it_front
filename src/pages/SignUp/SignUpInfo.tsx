import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import LogoSecondary from "../../assets/logo-secondary.svg";
import { FaForward } from "react-icons/fa";
import SimpleIcon from "../../assets/simpleicon.svg";
import { theme } from "../../styles/theme";

export const SignUpInfo = () => {
  return (
    <Grid w={["100%", "100%", "50%", "40%"]} pl={["0px", "0px", 100]}>
      <Image src={LogoSecondary} alt="doit" boxSize={[120, 120, 150]} />
      <VStack spacing="14" mt={["10px", 0]}>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <FaForward color={theme.colors.purple[800]} size={25} />
          </Center>
          <Box ml="4">
            <Heading size="lg">Agilidade</Heading>
            <Text>
              Agilize seus projetos com rapidez <br /> e muita performance
            </Text>
          </Box>
        </Flex>
        <Flex w="100%">
          <Center borderRadius="5px" bg="white" w="50px" h="50px">
            <Image src={SimpleIcon} w="25px" />
          </Center>
          <Box ml="4">
            <Heading size="lg">Simplicidade</Heading>
            <Text>
              Armazene seus projetos em uma <br /> interface altamente usual
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Grid>
  );
};
