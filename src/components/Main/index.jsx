import React, { useContext } from "react";
import { ThemeSubtitleBig } from "../../styles/typography";
import { ThemeButton } from "../../styles/buttons";
import TecnologiesContainer from "../TecnologiesContainer";
import { MainContainer } from "./styles";
import AddTechModal from "../AddTechModal";
import { ModalContext } from "../../contexts/modalContext";

const Main = () => {
	const { openAddTechModal, setOpenAddTechModal } = useContext(ModalContext);
	return (
		<>
			<MainContainer>
				<ThemeSubtitleBig>Tecnologias</ThemeSubtitleBig>
				<ThemeButton
					size="medium"
					bgcolor="darkGray"
					onClick={() => setOpenAddTechModal(true)}
				>
					+
				</ThemeButton>
				<TecnologiesContainer />
			</MainContainer>
			{openAddTechModal && <AddTechModal />}
		</>
	);
};

export default Main;
