import React, { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { AuthUserContext } from "../../contexts/authUser";
import { Container } from "./styles";
import { Navigate } from "react-router-dom";

const Home = () => {
	const { user, loading } = useContext(AuthUserContext);
	if (loading) return <div>Carregando...</div>;

	return user ? (
		<Container>
			<Navbar />
			<Header />
			<Main />
		</Container>
	) : (
		<Navigate to="/" replace />
	);
};

export default Home;
