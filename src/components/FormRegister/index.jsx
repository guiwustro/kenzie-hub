import { ThemeButton } from "../../styles/buttons";
import {
	ThemeInput,
	ThemeLabel,
	ThemeParagraph,
	ThemeTextError,
	ThemeTitle,
} from "../../styles/typography";
import { Container } from "./styles";
import { FormGroup } from "../../styles/formGroup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiFillWarning } from "react-icons/ai";
import { ErrorMessage } from "../../styles/errorMessage";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

function FormRegister() {
	const navigate = useNavigate();

	const formSchema = yup.object().shape({
		name: yup.string().required("Este campo é obrigatório."),
		email: yup
			.string()
			.required("Este campo é obrigatório.")
			.email("E-mail inválido"),
		password: yup
			.string()
			.required("Este campo é obrigatório.")
			.min(6, "A senha deve ter no mínimo 6 caracteres")
			.matches("(?=.*?[0-9])", "A senha deve conter ao menos um dígito")
			.matches(
				"(?=.*[A-Z])",
				"A senha deve conter ao menos uma letra maiúscula"
			)
			.matches(
				"(?=.*[a-z])",
				"A senha deve conter ao menos uma letra minúscula"
			)
			.matches(
				"(?=.*[!$*&@#%])",
				"A senha deve conter ao menos um caracter especial"
			),
		passwordConfirmation: yup
			.string()
			.required("Este campo é obrigatório.")
			.oneOf([yup.ref("password")], "Os campos não coincidem"),
		bio: yup.string().required("Este campo é obrigatório."),
		contact: yup.string().required("Este campo é obrigatório."),
		course_module: yup
			.string()
			.required("Selecione um módulo")
			.notOneOf(["DEFAULT"]),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(formSchema) });

	const onSubmitFunction = (data) => {
		api
			.post("/users", data)
			.then((res) => {
				navigate("/", { replace: true });
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container errors={errors.course_module}>
			<form onSubmit={handleSubmit(onSubmitFunction)}>
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
					{errors.name && (
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>{errors.name.message}</ThemeTextError>
						</ErrorMessage>
					)}
				</FormGroup>

				<FormGroup errors={errors.email}>
					<ThemeInput
						type="email"
						id="email"
						placeholder=" "
						{...register("email")}
					/>
					<ThemeLabel htmlFor="email">E-mail *</ThemeLabel>
					{errors.email && (
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>{errors.email.message}</ThemeTextError>
						</ErrorMessage>
					)}
				</FormGroup>

				<FormGroup errors={errors.password}>
					<ThemeInput
						type="password"
						id="password"
						placeholder=" "
						{...register("password")}
					/>
					<ThemeLabel htmlFor="password">Crie sua senha *</ThemeLabel>
					{errors.password && (
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>{errors.password.message}</ThemeTextError>
						</ErrorMessage>
					)}
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
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>
								{errors.passwordConfirmation.message}
							</ThemeTextError>
						</ErrorMessage>
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
					{errors.bio && (
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>{errors.bio.message}</ThemeTextError>
						</ErrorMessage>
					)}
				</FormGroup>

				<FormGroup errors={errors.contact}>
					<ThemeInput
						type="contact"
						id="contact"
						placeholder=" "
						{...register("contact")}
					/>
					<ThemeLabel htmlFor="contact">Contato</ThemeLabel>
					{errors.contact && (
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>{errors.contact.message}</ThemeTextError>
						</ErrorMessage>
					)}
				</FormGroup>

				<div className="form-select">
					<select
						defaultValue={"DEFAULT"}
						name="course_module"
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
						<ErrorMessage>
							<AiFillWarning />
							<ThemeTextError>Este campo é obrigatório</ThemeTextError>
						</ErrorMessage>
					)}
				</div>

				<ThemeButton type="submit" bgcolor="primary" size="big">
					Cadastrar
				</ThemeButton>
			</form>
		</Container>
	);
}

export default FormRegister;
