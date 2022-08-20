import { AnimatePresence } from "framer-motion";

import { useModalContext } from "../../contexts/modalContext";
import AddTechModal from "../AddTechModal";
import AddWorkModal from "../AddWorkModal";
import TecnologiesContainer from "../TecnologiesContainer";
import WorksContainer from "../WorksContainer";
import { MainContainer } from "./styles";

const Main = () => {
  const { openAddTechModal, openAddWorkModal } = useModalContext();
  return (
    <>
      <MainContainer>
        <TecnologiesContainer />
        <WorksContainer />
      </MainContainer>
      <AnimatePresence>{openAddTechModal && <AddTechModal />}</AnimatePresence>
      <AnimatePresence>{openAddWorkModal && <AddWorkModal />}</AnimatePresence>
    </>
  );
};

export default Main;
