import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha")
    .oneOf([yup.ref("password")], "senhas estão diferentes"),
});
