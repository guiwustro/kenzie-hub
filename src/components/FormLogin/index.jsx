import React, { useContext, useState } from "react";
import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTitle,
} from "../../styles/typography";
import { FormGroup } from "../../styles/formGroup";
import { FormContainer } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import { ToastContainerStyled } from "../../styles/toast";
import { AuthUserContext } from "../../contexts/authUser";

const FormLogin = () => {
	const { loginUser, isPasswordWrong } = useContext(AuthUserContext);

	const [showPassword, setShowPassword] = useState(false);
	let navigate = useNavigate();

	const formSchema = yup.object().shape({
		email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
		password: yup.string().required("Senha obrigatória"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
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
			<ToastContainerStyled />
		</>
	);
};

export default FormLogin;
