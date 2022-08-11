import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
