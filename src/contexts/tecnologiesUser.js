import { createContext, useContext } from "react";
import { api } from "../services/api";
import { AuthUserContext } from "./authUser";
import { toast } from "react-toastify";
import { ModalContext } from "./modalContext";

export const TechnologiesUserContext = createContext({});

const TechnologiesUserProvider = ({ children }) => {
	const { setTechnologies, technologies } = useContext(AuthUserContext);
	const { setOpenAddTechModal, setOpenEditTechModal } =
		useContext(ModalContext);
	const token = localStorage.getItem("@kenzihub-token");
	api.defaults.headers.Authorization = `Bearer ${token}`;

	const addTech = (data) => {
		api
			.post("/users/techs", data)
			.then((res) => {
				setTechnologies([...technologies, res.data]);
				setOpenAddTechModal(false);
				toast.success("Tecnologia cadastrada com sucesso.");
			})
			.catch(() => {
				toast.error("Não foi possível cadastrar a tecnologia.");
			});
	};

	const deleteTech = (techId) => {
		api
			.delete(`users/techs/${techId}`)
			.then(() => {
				const newTechs = technologies.filter(({ id }) => id !== techId);
				setTechnologies(newTechs);
				toast.success("Tecnologia deletada com sucesso.");
				setOpenEditTechModal(false);
			})
			.catch(() => {
				toast.error(
					"Não foi possível deletar a tecnologia. Nosso banco de dados está em manutenção, tente novamente mais tarde."
				);
			});
	};

	const editTech = (techId, newData) => {
		api
			.put(`users/techs/${techId}`, newData)
			.then(() => {
				const indexTech = technologies.findIndex(({ id }) => id === techId);
				const newTech = [...technologies];
				newTech[indexTech].status = newData.status;
				setTechnologies(newTech);
				setOpenEditTechModal(false);
				toast.success("Tecnologia editada com sucesso.");
			})
			.catch(() => {
				toast.error(
					"Não foi possível deletar a tecnologia. Nosso banco de dados está em manutenção, tente novamente mais tarde."
				);
			});
	};

	return (
		<TechnologiesUserContext.Provider
			value={{
				technologies,
				addTech,
				deleteTech,
				editTech,
			}}
		>
			{children}
		</TechnologiesUserContext.Provider>
	);
};

export default TechnologiesUserProvider;
