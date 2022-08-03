import React from "react";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { HeaderContainer } from "./styles";

function Header(props) {
	return (
		<HeaderContainer>
			<header>
				<ThemeTitle>Olá, {props.nome} </ThemeTitle>
				<ThemeParagraph>Primeiro módulo</ThemeParagraph>
			</header>
		</HeaderContainer>
	);
}

export default Header;
