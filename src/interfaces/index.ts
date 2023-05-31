import { ReactNode } from "react";
import {
  InputProps as ChakraInputProps,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { SkeletonProps } from "@chakra-ui/react";

export interface iProviderProps {
  children: ReactNode;
}

export interface iInputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

export interface iTextAreaProps extends ChakraTextareaProps {
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

export interface iTask {
  id: string;
  title: string;
  description: string;
  userId: string;
  completed: boolean;
}

export interface iTaskCard {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface iTaskData {
  title: string;
  description: string;
}

export type inputVariationOptions = {
  [key: string]: string;
};

export interface iCardSkeletonProps extends SkeletonProps {
  repeatCount: number;
}

export interface iSearchData {
  title: string;
}
