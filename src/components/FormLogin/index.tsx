import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IUserLogin, useAuthUserContext } from "../../contexts/authUserContext";
import { ThemeButton } from "../../styles/buttons";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { FormGroup } from "../FormGroup";
import { FormGroupPassword } from "../FormGroupPassword";
import { FormContainer } from "./styles";

const FormLogin = () => {
  const { loginUser, isPasswordWrong } = useAuthUserContext();

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Algum dos campos está incorreto");
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(loginUser, onError)}>
          <div className="form__title">
            <ThemeTitle>Login</ThemeTitle>
          </div>
          <FormGroup
            register={register}
            errors={errors.email?.message}
            label={"E-mail"}
            registerName={"email"}
          />

          <FormGroupPassword
            register={register}
            errors={errors.password?.message}
            registerName={"password"}
            label={"Senha"}
            isPasswordWrong={isPasswordWrong}
          />

          <ThemeButton bgcolor="primary" size="big" type="submit">
            Entrar
          </ThemeButton>
          <ThemeParagraph>Ainda não possui uma conta?</ThemeParagraph>
          <ThemeButton
            bgcolor="lightGray"
            size="big"
            onClick={() => navigate("/register", { replace: true })}
          >
            Cadastre-se
          </ThemeButton>
        </form>
      </FormContainer>
    </>
  );
};

export default FormLogin;
