import React, { useState } from "react";
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
import { api } from "../../services/api";
import ErrorMessage from "../ErrorMessage";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import { ToastContainerStyled } from "../../styles/toast";

const FormLogin = ({ setUser }) => {
	let navigate = useNavigate();
	const formSchema = yup.object().shape({
		email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
		password: yup.string().required("Senha obrigatória"),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [isPasswordWrong, setIsPasswordWrong] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSubmit = (data) => {
		api
			.post("/sessions", data)
			.then((res) => {
				setUser(res.data.user);
				window.localStorage.setItem("@kenzihub-token", res.data.token);
				window.localStorage.setItem("@kenzihub-userid", res.data.user.id);
				toast.success(
					"Você será redirecionado para página principal em instantes",
					{
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					}
				);

				setTimeout(() => {
					navigate("/home", { replace: true });
				}, 1500);
			})
			.catch(() => {
				setIsPasswordWrong(true);
				toast.error("Algum dos campos está incorreto", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			});
	};

	const onError = () => {
		toast.error("Algum dos campos está incorreto", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<>
			<FormContainer>
				<form onSubmit={handleSubmit(onSubmit, onError)}>
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
						Cadastre-se Teste
					</ThemeButton>
				</form>
			</FormContainer>
			<ToastContainerStyled />
		</>
	);
};

export default FormLogin;
