import FormLogin from "../../components/FormLogin";
import Logo from "../../components/Logo";
import { Container } from "./styles";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
	return (
		<>
			<Container>
				<Logo />
				<FormLogin setUser={setUser} />
			</Container>
		</>
	);
};

export default Login;
