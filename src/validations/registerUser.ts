import * as yup from "yup";

export const formRegister = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório."),
  email: yup
    .string()
    .required("Este campo é obrigatório.")
    .email("E-mail inválido"),
  password: yup
    .string()
    .required("Este campo é obrigatório.")
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .matches(/\?=\.*?[0-9]/, "A senha deve conter ao menos um dígito")
    .matches(/\?=\.*[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/\?=\.*[a-z]/, "A senha deve conter ao menos uma letra minúscula")
    .matches(
      /\?=\.*[!$*&@#%]/,
      "A senha deve conter ao menos um caracter especial",
    ),
  passwordConfirmation: yup
    .string()
    .required("Este campo é obrigatório.")
    .oneOf([yup.ref("password")], "Os campos não coincidem"),
  bio: yup.string().required("Este campo é obrigatório."),
  contact: yup.string().required("Este campo é obrigatório."),
  course_module: yup
    .string()
    .required("Selecione um módulo")
    .notOneOf(["DEFAULT"]),
});
