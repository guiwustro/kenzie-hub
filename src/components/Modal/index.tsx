import { useModalContext } from "../../contexts/modalContext";
import AddTechModal from "../AddTechModal";
import AddWorkModal from "../AddWorkModal";
import EditTechModal from "../EditTechModal";
import EditWorkModal from "../EditWorkModal";

export const Modal = () => {
  const { modalConfig } = useModalContext();

  if (
    modalConfig.type === "Edit" &&
    modalConfig.content === "Tech" &&
    modalConfig.dataTech
  ) {
    return <EditTechModal actualTech={modalConfig.dataTech}></EditTechModal>;
  }

  if (
    modalConfig.type === "Edit" &&
    modalConfig.content === "Work" &&
    modalConfig.dataWork
  ) {
    return <EditWorkModal actualWork={modalConfig.dataWork}></EditWorkModal>;
  }

  if (modalConfig.type === "Add" && modalConfig.content === "Tech") {
    return <AddTechModal />;
  }

  if (modalConfig.type === "Add" && modalConfig.content === "Work") {
    return <AddWorkModal />;
  }

  return <></>;
};

//   const content = modalConfig.content;
//   const type = modalConfig.type;

//   const modals = {
//     Tech: {
//       Add: <AddTechModal></AddTechModal>,
//       Edit: createModalEditTech(),
//     },
//     Work: {
//       Add: <AddWorkModal></AddWorkModal>,
//       Edit: createModalEditWork(),
//     },
//   };
