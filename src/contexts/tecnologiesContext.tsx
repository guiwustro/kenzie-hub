import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import { ITech, useAuthUserContext } from "./authUserContext";
import { useModalContext } from "./modalContext";

interface ITechnologiesProviderData {
  technologies: ITech[];
  addTech: (data: ITechAdd) => void;
  deleteTech: (techId: string) => void;
  editTech: (techId: string, newData: ITechEdit) => void;
}

interface ITechAddResponse {
  data: ITechData;
}

//resposta do post
export interface ITechData {
  id: string;
  title: string;
  status: string;
  user?: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

export type ITechAdd = Omit<ITech, "id" | "created_at" | "updated_at">;

export type ITechEdit = Omit<ITechAdd, "title">;

interface ITechnologiesProps {
  children: ReactNode;
}

export const TechnologiesContext = createContext(
  {} as ITechnologiesProviderData,
);

const TechnologiesProvider = ({ children }: ITechnologiesProps) => {
  const { setTechnologies, technologies } = useAuthUserContext();
  const { closeModal } = useModalContext();

  const token = localStorage.getItem("@kenzihub-token");
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const addTech = (data: ITechAdd) => {
    api
      .post("/users/techs", data)
      .then((res: ITechAddResponse) => {
        delete res.data.user;
        setTechnologies([...technologies, res.data]);
        closeModal();
        toast.success("Tecnologia cadastrada com sucesso.");
      })
      .catch(() => {
        toast.error("Não foi possível cadastrar a tecnologia.");
      });
  };

  const deleteTech = (techId: string) => {
    api
      .delete(`users/techs/${techId}`)
      .then(() => {
        const newTechs = technologies.filter(({ id }) => id !== techId);
        setTechnologies(newTechs);
        toast.success("Tecnologia deletada com sucesso.");
        closeModal();
      })
      .catch(() => {
        toast.error(
          "Não foi possível deletar a tecnologia. Nosso banco de dados está em manutenção, tente novamente mais tarde.",
        );
      });
  };

  const editTech = (techId: string, newData: ITechEdit) => {
    api
      .put(`users/techs/${techId}`, newData)
      .then(() => {
        const indexTech = technologies.findIndex(({ id }) => id === techId);
        const newTech = [...technologies];
        newTech[indexTech].status = newData.status;
        setTechnologies(newTech);
        closeModal();
        toast.success("Tecnologia editada com sucesso.");
      })
      .catch(() => {
        toast.error(
          "Não foi possível deletar a tecnologia. Nosso banco de dados está em manutenção, tente novamente mais tarde.",
        );
      });
  };

  return (
    <TechnologiesContext.Provider
      value={{
        technologies,
        addTech,
        deleteTech,
        editTech,
      }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};

export default TechnologiesProvider;

export const useTechnologiesContext = () => useContext(TechnologiesContext);
