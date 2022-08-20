import { useNavigate } from "react-router-dom";

import { ThemeButton } from "../../styles/buttons";
import Logo from "../Logo";
import { NavbarContainer } from "./styles";

const Navbar = () => {
  const navigate = useNavigate();

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
};

export default Navbar;
