import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IUserLogin, useAuthUserContext } from "../../contexts/authUserContext";
import { ThemeButton } from "../../styles/buttons";
import { FormGroup } from "../../styles/formGroup";
import {
  ThemeInput,
  ThemeLabel,
  ThemeParagraph,
  ThemeTitle,
} from "../../styles/typography";
import ErrorMessage from "../ErrorMessage";
import { FormContainer } from "./styles";

const FormLogin = () => {
  const { loginUser, isPasswordWrong } = useAuthUserContext();

  const [showPassword, setShowPassword] = useState(false);
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

          <FormGroup>
            <ThemeInput type="text" placeholder=" " {...register("email")} />
            <ThemeLabel htmlFor="email">Email</ThemeLabel>
            {errors.email && <ErrorMessage error={errors.email.message} />}
          </FormGroup>

          <FormGroup className="form__group">
            <ThemeInput
              type={showPassword ? "text" : "password"}
              placeholder=" "
              {...register("password")}
            />
            <ThemeLabel htmlFor="password">Senha</ThemeLabel>
            <button
              type="button"
              className="password-show__button"
              onClick={() => setShowPassword((old) => !old)}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </button>
            {errors.password && (
              <ErrorMessage error={errors.password.message} />
            )}
            {isPasswordWrong && <ErrorMessage error="Senha incorreta." />}
          </FormGroup>

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
