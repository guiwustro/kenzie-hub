import React, { useContext } from "react";
import { FormGroup } from "../../styles/formGroup";
import {
	ThemeInput,
	ThemeLabel,
	ThemeSubtitleSmall,
} from "../../styles/typography";
import { ModalAddTech } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage";
import { toast } from "react-toastify";
import { TechnologiesUserContext } from "../../contexts/tecnologiesUser";
import { StyledModal } from "../../styles/modal";
import { ModalContext } from "../../contexts/modalContext";
import { ThemeButton } from "../../styles/buttons";

const AddTechModal = () => {
	const { addTech, technologies } = useContext(TechnologiesUserContext);
	const { setOpenAddTechModal } = useContext(ModalContext);
	const formSchema = yup.object().shape({
		title: yup
			.string()
			.required("Campo obrigatório")
			.test("duplicated", "Essa tecnologia já existe.", (techName) => {
				return !hasTech(techName);
			}),
		status: yup.string().required("Campo obrigatório").notOneOf(["DEFAULT"]),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

	const onError = () => {
		toast.error("Preencha todos os campos corretamente");
	};

	const hasTech = (techName) => {
		return technologies.some(({ title }) => title === techName);
	};

	return (
		<StyledModal>
			<ModalAddTech errors={errors.status}>
				<div className="modal__header">
					<ThemeSubtitleSmall>Cadastrar Tecnologia</ThemeSubtitleSmall>
					<button
						className="modal__close-button"
						onClick={() => setOpenAddTechModal(false)}
					>
						X
					</button>
				</div>

				<form className="modal__body" onSubmit={handleSubmit(addTech, onError)}>
					<FormGroup errors={errors.title}>
						<ThemeInput type="text" placeholder=" " {...register("title")} />
						<ThemeLabel>Nome</ThemeLabel>
						{errors.title && <ErrorMessage error={errors.title.message} />}
					</FormGroup>

					<div className="form-select__status">
						<select defaultValue={"DEFAULT"} {...register("status")}>
							<option disabled value="DEFAULT">
								Selecione um Status
							</option>
							<option value="Iniciante">Iniciante</option>
							<option value="Intermediário">Intermediário</option>
							<option value="Avançado">Avançado</option>
						</select>
						{errors.status && (
							<ErrorMessage error={"Este campo é obrigatório"} />
						)}
					</div>
					<ThemeButton bgcolor="primary" size="big" type="submit">
						Cadastrar Tecnologia
					</ThemeButton>
				</form>
			</ModalAddTech>
		</StyledModal>
	);
};

export default AddTechModal;
