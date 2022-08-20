import { motion } from "framer-motion";

import Navbar from "../Navbar";
import { LoadingCircle, LoadingContainer } from "./styles";

const LoadingScreen = () => {
  const spinTransition = {
    loop: Infinity,
    duration: 1,
    ease: "linear",
  };

  return (
    <LoadingContainer>
      <Navbar />
      <LoadingCircle>
        <motion.span
          animate={{
            rotate: 360,
          }}
          transition={spinTransition}
        ></motion.span>
      </LoadingCircle>
    </LoadingContainer>
  );
};

export default LoadingScreen;
