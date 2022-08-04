import React from "react";
import { ThemeInput, ThemeLabel } from "../../styles/typography";
import { FormGroup24 } from "./styles";

function FormGroup2({ children, type, id, label }) {
	return (
		<FormGroup24>
			<ThemeInput type={type} id={id} placeholder=" " />
			<ThemeLabel>{label}</ThemeLabel>
			{children}
		</FormGroup24>
	);
}

export default FormGroup2;
