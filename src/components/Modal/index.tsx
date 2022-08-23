import { motion } from "framer-motion";

import { useModalContext } from "../../contexts/modalContext";
import { StyledModal } from "../../styles/modal";
import AddTechModal from "./AddTechModal";
import AddWorkModal from "./AddWorkModal";
import EditTechModal from "./EditTechModal";
import EditWorkModal from "./EditWorkModal";

export const Modal = () => {
  const { modalConfig } = useModalContext();

  const content = modalConfig.content;
  const type = modalConfig.type;

  const createModalEditWork = () => {
    if (modalConfig.dataWork)
      return <EditWorkModal actualWork={modalConfig.dataWork} />;
  };

  const createModalEditTech = () => {
    if (modalConfig.dataTech)
      return <EditTechModal actualTech={modalConfig.dataTech} />;
  };

  const modals = {
    Tech: {
      Add: <AddTechModal />,
      Edit: createModalEditTech(),
    },
    Work: {
      Add: <AddWorkModal />,
      Edit: createModalEditWork(),
    },
  };
  return (
    <StyledModal>
      <motion.div
        key="add-modal"
        initial={{ x: 400, y: -200, scale: 0.5, opacity: 0 }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        exit={{
          x: 500,
          y: -200,
          scale: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {modals[content][type]}
      </motion.div>
    </StyledModal>
  );
};
