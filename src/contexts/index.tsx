import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./AuthContext";
import { iProviderProps } from "../interfaces";
import { TaskProvider } from "./TasksContext";

export const AppProvider = ({ children }: iProviderProps) => {
  return (
    <AuthProvider>
      <TaskProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </TaskProvider>
    </AuthProvider>
  );
};
