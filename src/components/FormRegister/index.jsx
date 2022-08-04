import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTitle,
} from "../../styles/typography";
import { Container } from "./styles";
import { FormGroup } from "../../styles/formGroup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import { formRegister } from "../../validations/registerUser";
import { ToastContainer, toast } from "react-toastify";

function FormRegister() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formRegister) });

	const onSubmit = (data) => {
		api
			.post("/users", data)
			.then(() => {
				toast.success(
					"Você será redirecionado para página de login em instantes",
					{
						position: "top-right",
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					}
				);
				setTimeout(() => {
					navigate("/", { replace: true });
				}, 2000);
			})
			.catch((err) => console.log(err));
	};

	const onError = () => {
		toast.error("Algum dos campos está incorreto", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<Container errors={errors.course_module}>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<ThemeTitle>Crie sua conta</ThemeTitle>
				<ThemeParagraph>Rápido e grátis, vamos nessa</ThemeParagraph>
				<FormGroup errors={errors.name}>
					<ThemeInput
						type="text"
						id="name"
						placeholder=" "
						{...register("name")}
					/>
					<ThemeLabel htmlFor="name">Nome *</ThemeLabel>
					{errors.name && <ErrorMessage error={errors.name.message} />}
				</FormGroup>

				<FormGroup errors={errors.email}>
					<ThemeInput
						type="email"
						id="email"
						placeholder=" "
						{...register("email")}
					/>
					<ThemeLabel htmlFor="email">E-mail *</ThemeLabel>
					{errors.email && <ErrorMessage error={errors.email.message} />}
				</FormGroup>

				<FormGroup errors={errors.password}>
					<ThemeInput
						type="password"
						id="password"
						placeholder=" "
						{...register("password")}
					/>
					<ThemeLabel htmlFor="password">Crie sua senha *</ThemeLabel>
					{errors.password && <ErrorMessage error={errors.password.message} />}
				</FormGroup>

				<FormGroup errors={errors.passwordConfirmation}>
					<ThemeInput
						type="password"
						id="passwordConfirmation"
						placeholder=" "
						{...register("passwordConfirmation")}
					/>
					<ThemeLabel htmlFor="passwordConfirmation">
						Confirme a senha *
					</ThemeLabel>
					{errors.passwordConfirmation && (
						<ErrorMessage error={errors.passwordConfirmation.message} />
					)}
				</FormGroup>

				<FormGroup errors={errors.bio}>
					<ThemeInput
						type="text"
						id="bio"
						placeholder=" "
						{...register("bio")}
					/>
					<ThemeLabel htmlFor="bio">Bio</ThemeLabel>
					{errors.bio && <ErrorMessage error={errors.bio.message} />}
				</FormGroup>

				<FormGroup errors={errors.contact}>
					<ThemeInput
						type="contact"
						id="contact"
						placeholder=" "
						{...register("contact")}
					/>
					<ThemeLabel htmlFor="contact">Contato</ThemeLabel>
					{errors.contact && <ErrorMessage error={errors.contact.message} />}
				</FormGroup>

				<div className="form-select">
					<select
						defaultValue={"DEFAULT"}
						id="course_module"
						{...register("course_module")}
					>
						<option disabled value="DEFAULT">
							Selecione um módulo
						</option>
						<option value="Primeiro módulo">Primeiro módulo</option>
						<option value="Segundo módulo">Segundo módulo</option>
						<option value="Terceiro módulo">Terceiro módulo</option>
						<option value="Quarto módulo">Quarto módulo</option>
						<option value="Quinto módulo">Quinto módulo</option>
						<option value="Sexto módulo">Sexto módulo</option>
					</select>
					{errors.course_module && (
						<ErrorMessage error={"Este campo é obrigatório"} />
					)}
				</div>
				<ThemeButton type="submit" bgcolor="primary" size="big">
					Cadastrar
				</ThemeButton>
			</form>
			<ToastContainer />
		</Container>
	);
}

export default FormRegister;
