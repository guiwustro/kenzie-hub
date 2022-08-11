import { api } from "../services/api";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthUserContext = createContext({});

const AuthUserProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [isPasswordWrong, setIsPasswordWrong] = useState(false);
	const [loading, setLoading] = useState(true);

	const [technologies, setTechnologies] = useState([]);

	let navigate = useNavigate();

	const loginUser = (data) => {
		api
			.post("/sessions", data)
			.then((res) => {
				setUser(res.data.user);
				window.localStorage.setItem("@kenzihub-token", res.data.token);
				window.localStorage.setItem("@kenzihub-userid", res.data.user.id);
				api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

				toast.success(
					"Você será redirecionado para página principal em instantes"
				);

				setLoading(false);

				setTimeout(() => {
					navigate("/home", { replace: true });
				}, 1500);
			})
			.catch(() => {
				setIsPasswordWrong(true);
				toast.error("Algum dos campos está incorreto");
			});
	};

	const registerUser = (data) => {
		api
			.post("/users", data)
			.then(() => {
				console.log(data);
				toast.success(
					"Você será redirecionado para página de login em instantes"
				);
				setTimeout(() => {
					navigate("/", { replace: true });
				}, 2000);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		const token = localStorage.getItem("@kenzihub-token");
		api.defaults.headers.Authorization = `Bearer ${token}`;
		if (token) {
			api
				.get(`/profile`)
				.then((res) => {
					setUser(res.data);
					setTechnologies(res.data.techs);
				})
				.catch(() => {
					localStorage.clear();
					setLoading(false);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, []);

	return (
		<AuthUserContext.Provider
			value={{
				user,
				setUser,
				loading,
				setTechnologies,
				technologies,
				loginUser,
				registerUser,
				isPasswordWrong,
			}}
		>
			{children}
		</AuthUserContext.Provider>
	);
};

export default AuthUserProvider;
