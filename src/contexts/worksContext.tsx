import { createContext, ReactNode, useContext } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import { IWork, useAuthUserContext } from "./authUserContext";
import { useModalContext } from "./modalContext";

interface IWorksPostResponse {
  data: {
    id: string;
    title: string;
    description: string;
    deploy_url: string;
    created_at: string;
    updated_at: string;
    user?: {
      id: string;
    };
  };
}

export type IWorkAdd = Omit<IWork, "created_at" | "updated_at" | "id">;

export type IWorkEdit = Omit<
  IWork,
  "created_at" | "updated_at" | "id" | "deploy_url"
>;

interface IWorksProvider {
  works: IWork[];
  addWork: (data: IWorkAdd) => void;
  deleteWork: (techId: string) => void;
  editWork: (techId: string, newData: IWorkEdit) => void;
}

interface IWorksProps {
  children: ReactNode;
}

export const WorksContext = createContext({} as IWorksProvider);

const WorksProvider = ({ children }: IWorksProps) => {
  const { works, setWorks } = useAuthUserContext();
  const { closeModal } = useModalContext();

  const addWork = (data: IWorkAdd) => {
    api
      .post("/users/works", data)
      .then((res: IWorksPostResponse) => {
        delete res.data.user;
        setWorks([...works, res.data]);
        closeModal();
        toast.success("Projeto cadastrado com sucesso.");
      })
      .catch(() => {
        toast.error("Não foi possível cadastrar o Projeto.");
      });
  };

  const deleteWork = (techId: string) => {
    api
      .delete(`users/works/${techId}`)
      .then(() => {
        const newTechs = works.filter(({ id }) => id !== techId);
        setWorks(newTechs);
        toast.success("Projeto deletado com sucesso.");
        closeModal();
      })
      .catch(() => {
        toast.error(
          "Não foi possível deletar o projeto. Nosso banco de dados está em manutenção, tente novamente mais tarde.",
        );
      });
  };

  const editWork = (techId: string, newData: IWorkEdit) => {
    api
      .put(`users/works/${techId}`, newData)
      .then(() => {
        const indexTech = works.findIndex(({ id }) => id === techId);
        const newTech = [...works];

        newTech[indexTech].title = newData.title;
        newTech[indexTech].description = newData.description;

        setWorks(newTech);
        closeModal();
        toast.success("Tecnologia editada com sucesso.");
      })
      .catch(() => {
        toast.error(
          "Não foi possível alterar a tecnologia. Nosso banco de dados está em manutenção, tente novamente mais tarde.",
        );
      });
  };
  return (
    <WorksContext.Provider value={{ works, addWork, deleteWork, editWork }}>
      {children}
    </WorksContext.Provider>
  );
};

export default WorksProvider;

export const useWorksContext = () => useContext(WorksContext);
