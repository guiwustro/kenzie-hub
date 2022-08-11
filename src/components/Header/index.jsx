import React, { useContext } from "react";
import { AuthUserContext } from "../../contexts/authUser";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { HeaderContainer } from "./styles";

function Header() {
	const { user } = useContext(AuthUserContext);

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
