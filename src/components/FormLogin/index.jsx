import React from "react";
import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTitle,
} from "../../styles/typography";
import { FormContainer } from "./styles";

const FormLogin = () => {
	return (
		<FormContainer>
			<form>
				<div className="form__title">
					<ThemeTitle>Login</ThemeTitle>
				</div>
				<div className="form__group">
					<ThemeInput type="text" placeholder=" " />
					<ThemeLabel htmlFor="email">Email</ThemeLabel>
				</div>
				<div className="form__group">
					<ThemeInput type="password" placeholder=" " />
					<ThemeLabel htmlFor="password">Senha</ThemeLabel>
				</div>
				<ThemeButton bgcolor="primary" size="big" type="submit">
					Entrar
				</ThemeButton>
				<ThemeParagraph>Ainda não possui uma conta?</ThemeParagraph>
				<ThemeButton bgcolor="lightGray" size="big">
					Cadastre-se
				</ThemeButton>
			</form>
		</FormContainer>
	);
};

export default FormLogin;
