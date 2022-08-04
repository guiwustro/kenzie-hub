import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";

const Home = ({ user }) => {
	return (
		<Container>
			<Navbar />
			<Header user={user} />
			<Main />
		</Container>
	);
};

export default Home;
