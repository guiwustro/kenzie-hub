import React from "react";
import FormLogin from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { Container } from "./styles";

const Login = ({ setUser }) => {
	return (
		<Container>
			<Logo />
			<FormLogin setUser={setUser} />
		</Container>
	);
};

export default Login;
