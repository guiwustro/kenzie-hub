import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";

const Home = () => {
	return (
		<div>
			<Container>
				<Navbar />
				<Header />
				<Main />
			</Container>
		</div>
	);
};

export default Home;
