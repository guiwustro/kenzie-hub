import FormLogin from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
      <Container>
        <Logo />
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
