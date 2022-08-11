import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";
const RoutesMain = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
};

export default RoutesMain;
