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
				<div>
					<ThemeTitle>Login</ThemeTitle>
				</div>
				<div>
					<ThemeLabel htmlFor="email">Email</ThemeLabel>
					<ThemeInput type="text" />
				</div>
				<div>
					<ThemeLabel htmlFor="password">Senha</ThemeLabel>
					<ThemeInput type="password" />
				</div>
				<div>
					<ThemeButton bgcolor="primary" size="big" type="submit">
						Entrar
					</ThemeButton>
				</div>
				<div>
					<ThemeParagraph>Ainda não possui uma conta?</ThemeParagraph>
					<ThemeButton bgcolor="lightGray" size="big">
						Cadastre-se
					</ThemeButton>
				</div>
			</form>
		</FormContainer>
	);
};

export default FormLogin;
