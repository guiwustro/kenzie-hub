import React from "react";
import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTitle,
} from "../../styles/typography";
import { Container } from "./styles";
import { FormGroup } from "../../styles/formGroup";

function FormRegister() {
	return (
		<Container>
			<form>
				<ThemeTitle>Crie sua conta</ThemeTitle>
				<ThemeParagraph>Rápido e grátis, vamos nessa</ThemeParagraph>
				<FormGroup>
					<ThemeInput type="text" id="name" placeholder=" " />
					<ThemeLabel htmlFor="name">Nome*</ThemeLabel>
				</FormGroup>
				<FormGroup>
					<ThemeInput type="email" id="email" placeholder=" " />
					<ThemeLabel htmlFor="email">E-mail*</ThemeLabel>
				</FormGroup>
				<FormGroup>
					<ThemeInput type="password" id="password" placeholder=" " />
					<ThemeLabel htmlFor="password">Crie sua senha*</ThemeLabel>
				</FormGroup>
				<FormGroup>
					<ThemeInput
						type="password"
						id="passwordConfirmation"
						placeholder=" "
					/>
					<ThemeLabel htmlFor="passwordConfirmation">
						Confirme a senha *
					</ThemeLabel>
				</FormGroup>
				<FormGroup>
					<ThemeInput type="text" id="bio" placeholder=" " />
					<ThemeLabel htmlFor="bio">Bio</ThemeLabel>
				</FormGroup>
				<FormGroup>
					<ThemeInput type="tel" id="tel" placeholder=" " />
					<ThemeLabel htmlFor="tel">Contato</ThemeLabel>
				</FormGroup>
				<div className="form-select">
					<select name="module" id="module">
						<option disabled value selected>
							Selecione um módulo
						</option>
						<option value="primeiro">Primeiro módulo</option>
						<option value="segundo">Segundo módulo</option>
						<option value="terceiro">Terceiro módulo</option>
						<option value="quarto">Quarto módulo</option>
						<option value="quinto">Quinto módulo</option>
						<option value="sexto">Sexto módulo</option>
					</select>
				</div>
				<ThemeButton type="submit" bgcolor="primary" size="big">
					Cadastrar
				</ThemeButton>
			</form>
		</Container>
	);
}

export default FormRegister;
