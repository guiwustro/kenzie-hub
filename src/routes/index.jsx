import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Route, Routes } from "react-router-dom";

const RoutesMain = ({ setUser, user }) => {
	return (
		<Routes>
			<Route path="/" element={<Login setUser={setUser} />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<Home user={user} />} />
		</Routes>
	);
};

export default RoutesMain;
