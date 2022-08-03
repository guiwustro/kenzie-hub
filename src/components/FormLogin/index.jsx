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

const FormLogin = () => {
	return (
		<FormContainer>
			<form>
				<div className="form__title">
					<ThemeTitle>Login</ThemeTitle>
				</div>
				<FormGroup>
					<ThemeInput type="text" placeholder=" " />
					<ThemeLabel htmlFor="email">Email</ThemeLabel>
				</FormGroup>
				<FormGroup className="form__group">
					<ThemeInput type="password" placeholder=" " />
					<ThemeLabel htmlFor="password">Senha</ThemeLabel>
				</FormGroup>
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
