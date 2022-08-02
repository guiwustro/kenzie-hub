import React from "react";
import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTitle,
} from "../../styles/typography";
import { Form } from "./styles";

function FormRegister() {
	return (
		<Form>
			<div>
				<ThemeTitle>Crie sua conta</ThemeTitle>
			</div>
			<div>
				<ThemeParagraph>Rápido e gátis, vamos nessa</ThemeParagraph>
			</div>
			<div>
				<ThemeLabel htmlFor="name">Nome</ThemeLabel>
				<ThemeInput type="text" id="name" />
			</div>

			<div>
				<ThemeLabel htmlFor="email">Email</ThemeLabel>
				<ThemeInput type="email" id="email" />
			</div>

			<div>
				<ThemeLabel htmlFor="password">Senha</ThemeLabel>
				<ThemeInput type="password" id="password" />
			</div>

			<div>
				<ThemeLabel htmlFor="passwordConfirmation">Confirmar senha</ThemeLabel>
				<ThemeInput type="password" id="passwordConfirmation" />
			</div>

			<div>
				<ThemeLabel htmlFor="bio">Bio</ThemeLabel>
				<ThemeInput type="text" id="bio" />
			</div>

			<div>
				<ThemeLabel htmlFor="tel">Contato</ThemeLabel>
				<ThemeInput type="tel" id="tel" />
			</div>

			<div>
				<ThemeLabel htmlFor="email">Selecionar módulo</ThemeLabel>
				<select name="module" id="module">
					<option value="primeiro">Primeiro módulo</option>
					<option value="segundo">Segundo módulo</option>
					<option value="terceiro">Terceiro módulo</option>
					<option value="quarto">Quarto módulo</option>
					<option value="quinto">Quinto módulo</option>
					<option value="sexto">Sexto módulo</option>
				</select>
			</div>

			<ThemeButton bgcolor="primary" size="big" />
		</Form>
	);
}

export default FormRegister;
