import React from "react";
import { ThemeButton } from "../../styles/buttons";
import Logo from "../Logo";
import { NavbarContainer } from "./styles";
import { useNavigate } from "react-router-dom";
function Navbar() {
	let navigate = useNavigate();

	return (
		<NavbarContainer>
			<Logo />
			<ThemeButton
				size="small"
				bgcolor="darkGray"
				onClick={() => {
					window.localStorage.clear();
					navigate("/", { replace: true });
				}}
			>
				Logout
			</ThemeButton>
		</NavbarContainer>
	);
}

export default Navbar;
