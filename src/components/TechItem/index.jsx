import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { ModalContext } from "../../contexts/modalContext";
import { TechnologiesUserContext } from "../../contexts/tecnologiesUser";
import { ToastContainerStyled } from "../../styles/toast";
import {
	ThemeParagraphList,
	ThemeSubtitleSmall,
} from "../../styles/typography";
import EditTechModal from "../EditTechModal";
import { TechItemStyled } from "./styles";

const TechItem = ({ tech }) => {
	const { deleteTech } = useContext(TechnologiesUserContext);
	const { openEditTechModal, setOpenEditTechModal } = useContext(ModalContext);
	console.log(openEditTechModal);

	return (
		<>
			<TechItemStyled>
				<ThemeSubtitleSmall>{tech.title}</ThemeSubtitleSmall>
				<ThemeParagraphList>{tech.status}</ThemeParagraphList>
				<div className="div__buttons">
					<button onClick={() => setOpenEditTechModal(true)}>
						<AiFillEdit />
					</button>
					<button onClick={() => deleteTech(tech.id)}>
						<BsFillTrashFill />
					</button>
				</div>
			</TechItemStyled>
			{openEditTechModal && <EditTechModal actualTech={tech} />}
			<ToastContainerStyled />
		</>
	);
};

export default TechItem;
