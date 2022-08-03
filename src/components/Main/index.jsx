import React from "react";
import { ThemeLabel, ThemeTitle } from "../../styles/typography";
import { MainContainer } from "./styles";
function Main() {
	return (
		<MainContainer>
			<ThemeTitle>Que pena! Estamos em desenvolvimento :(</ThemeTitle>
			<ThemeLabel>
				Nossa aplicação está em desenvolvimento, em breve teremos novidades
			</ThemeLabel>
		</MainContainer>
	);
}

export default Main;
