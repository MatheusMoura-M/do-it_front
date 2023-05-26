import { ReactNode } from "react";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";

export interface iProviderProps {
  children: ReactNode;
}

export interface iInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

export interface iSignInData {
  email: string;
  password: string;
}

export interface iSignUpData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface iUser {
  email: string;
  id: string;
  name: string;
}

export interface iAuthState {
  accessToken: string;
  user: iUser;
}
