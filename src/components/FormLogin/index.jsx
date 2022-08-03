import React from "react";
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

const FormLogin = ({ setUser }) => {
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

	const onSubmitFunction = (data) => {
		api
			.post("/sessions", data)
			.then((res) => {
				setUser(res.data.user);
				window.localStorage.setItem("@kenzihub-token", res.data.token);
				window.localStorage.setItem("@kenzihub-userid", res.data.user.id);

				navigate("/home", { replace: true });
			})
			.catch((err) => console.log(err));
	};

	return (
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmitFunction)}>
				<div className="form__title">
					<ThemeTitle>Login</ThemeTitle>
				</div>
				<FormGroup>
					<ThemeInput type="text" placeholder=" " {...register("email")} />
					<ThemeLabel htmlFor="email">Email</ThemeLabel>
					{errors.email && <span>{errors.email.message}</span>}
				</FormGroup>
				<FormGroup className="form__group">
					<ThemeInput
						type="password"
						placeholder=" "
						{...register("password")}
					/>
					<ThemeLabel htmlFor="password">Senha</ThemeLabel>
					{errors.password && <span>{errors.password.message}</span>}
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
	);
};

export default FormLogin;
