import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Header />
			<Main />
		</Container>
	);
};

export default Home;
