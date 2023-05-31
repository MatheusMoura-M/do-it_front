import * as yup from "yup";

export const createTaskSchema = yup.object().shape({
  title: yup.string().required("Campo Obrigatório"),
  description: yup
    .string()
    .required("Campo Obrigatório")
    .max(100, "Máximo de 100 caracteres"),
});
