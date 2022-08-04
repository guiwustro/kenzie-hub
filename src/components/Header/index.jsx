import React from "react";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { HeaderContainer } from "./styles";

function Header({ user }) {
	console.log(user);

	return (
		<HeaderContainer>
			<header>
				<ThemeTitle>Olá, {user?.name} </ThemeTitle>
				<ThemeParagraph> {user?.course_module}</ThemeParagraph>
			</header>
		</HeaderContainer>
	);
}

export default Header;
