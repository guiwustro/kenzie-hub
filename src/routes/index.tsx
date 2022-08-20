import { Route, Routes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
