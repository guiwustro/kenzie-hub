import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { ThemeTextError } from "../../styles/typography";
import { Container } from "./styles";

function ErrorMessage({ error }) {
	return (
		<Container>
			<AiFillWarning />
			<ThemeTextError>{error}</ThemeTextError>
		</Container>
	);
}

export default ErrorMessage;
