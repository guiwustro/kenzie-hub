import React, { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { AuthUserContext } from "../../contexts/authUser";
import { Container } from "./styles";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";

const Home = () => {
	const { user, loading } = useContext(AuthUserContext);
	if (loading) return <LoadingScreen />;
	return user ? (
		<motion.div>
			<Container>
				<Navbar />
				<motion.div
					initial={{ y: 300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					<Header />
					<Main />
				</motion.div>
			</Container>
		</motion.div>
	) : (
		<Navigate to="/" replace />
	);
};

export default Home;
