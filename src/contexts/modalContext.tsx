import { createContext, ReactNode, useContext, useState } from "react";

import { ITech, IWork } from "./authUserContext";
import { ITechData } from "./tecnologiesContext";

interface IModalProviderData {
  modalConfig: IModalConfig;
  TechAddModal: () => void;
  TechEditModal: (actualTech: ITech) => void;
  WorkAddModal: () => void;
  WorkEditModal: (actualWork: IWork) => void;
  closeModal: () => void;
}

interface IModalProviderProps {
  children: ReactNode;
}

interface IModalConfig {
  isOpen: boolean;
  content: "Tech" | "Work";
  type: "Edit" | "Add";
  dataTech?: ITechData;
  dataWork?: IWork;
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modalConfig, setModalConfig] = useState<IModalConfig>({
    isOpen: false,
    content: "Tech",
    type: "Add",
  });

  const TechAddModal = () => {
    setModalConfig({
      isOpen: true,
      content: "Tech",
      type: "Add",
    });
  };
  const TechEditModal = (actualTech: ITech) => {
    setModalConfig({
      isOpen: true,
      content: "Tech",
      type: "Edit",
      dataTech: actualTech,
    });
  };

  const WorkAddModal = () => {
    setModalConfig({
      isOpen: true,
      content: "Work",
      type: "Add",
    });
  };
  const WorkEditModal = (actualWork: IWork) => {
    setModalConfig({
      isOpen: true,
      content: "Work",
      type: "Edit",
      dataWork: actualWork,
    });
  };

  const closeModal = () => {
    setModalConfig((previous) => {
      const config = { ...previous };
      config.isOpen = false;
      return config;
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modalConfig,
        TechAddModal,
        TechEditModal,
        WorkAddModal,
        WorkEditModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
