import React from "react";
import FormLogin from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { Container } from "./styles";

const Login = () => {
	return (
		<Container>
			<Logo />
			<FormLogin />;
		</Container>
	);
};

export default Login;
