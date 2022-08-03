import React from "react";
import { ThemeButton } from "../../styles/buttons";
import Logo from "../Logo";
import { NavbarContainer } from "./styles";
function Navbar() {
	return (
		<NavbarContainer>
			<Logo />
			<ThemeButton size="small" bgcolor="darkGray">
				Logout
			</ThemeButton>
		</NavbarContainer>
	);
}

export default Navbar;
