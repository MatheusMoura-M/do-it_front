import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("senha obrigatória"),
});
