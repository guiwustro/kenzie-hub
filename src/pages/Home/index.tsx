import { Navigate } from "react-router-dom";

import { motion } from "framer-motion";

import Header from "../../components/Header";
import LoadingScreen from "../../components/LoadingScreen";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import { useAuthUserContext } from "../../contexts/authUserContext";
import { Container } from "./styles";

const Home = () => {
  const { user, isLoading } = useAuthUserContext();
  if (isLoading) return <LoadingScreen />;
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
