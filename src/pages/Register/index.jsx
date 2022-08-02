import React from "react";
import FormRegister from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { ThemeButton } from "../../styles/buttons";
import { Container } from "./styles";

const Register = () => {
	return (
		<Container>
			<Logo />
			<ThemeButton size="small" bgcolor="darkgray" />
			<FormRegister />
		</Container>
	);
};

export default Register;
