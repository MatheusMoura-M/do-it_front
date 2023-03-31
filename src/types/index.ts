import { ReactNode } from "react";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

export interface iClientLogin {
  email: string;
  password: string;
}

export interface iProviderProps {
  children: ReactNode;
}

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

export interface SignInData {
  email: string;
  password: string;
}
