import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IModalProviderData {
  openAddTechModal: boolean;
  openEditTechModal: boolean;
  openAddWorkModal: boolean;
  openEditWorkModal: boolean;
  setOpenAddTechModal: Dispatch<SetStateAction<boolean>>;
  setOpenEditTechModal: Dispatch<SetStateAction<boolean>>;
  setOpenAddWorkModal: Dispatch<SetStateAction<boolean>>;
  setOpenEditWorkModal: Dispatch<SetStateAction<boolean>>;
}

interface IModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext({} as IModalProviderData);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [openAddTechModal, setOpenAddTechModal] = useState(false);
  const [openEditTechModal, setOpenEditTechModal] = useState(false);
  const [openAddWorkModal, setOpenAddWorkModal] = useState(false);
  const [openEditWorkModal, setOpenEditWorkModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openAddTechModal,
        setOpenAddTechModal,
        openEditTechModal,
        setOpenEditTechModal,
        openAddWorkModal,
        setOpenAddWorkModal,
        openEditWorkModal,
        setOpenEditWorkModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
