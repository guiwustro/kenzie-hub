import { useAuthUserContext } from "../../contexts/authUserContext";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { HeaderContainer } from "./styles";

function Header() {
  const { user } = useAuthUserContext();

  return (
    <HeaderContainer>
      <header>
        <ThemeTitle>Olá, {user?.name} </ThemeTitle>
        <ThemeParagraph> {user?.course_module}</ThemeParagraph>
      </header>
    </HeaderContainer>
  );
}

export default Header;
