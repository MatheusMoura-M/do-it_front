import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { iProviderProps } from "../types";

export const AppProvider = ({ children }: iProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
