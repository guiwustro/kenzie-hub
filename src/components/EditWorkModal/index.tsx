import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { IWork } from "../../contexts/authUserContext";
import { useModalContext } from "../../contexts/modalContext";
import { useWorksContext, IWorkEdit } from "../../contexts/worksContext";
import { ThemeButton } from "../../styles/buttons";
import { FormGroup, FormGroupTextArea } from "../../styles/formGroup";
import { StyledModal } from "../../styles/modal";
import {
  ThemeInput,
  ThemeLabel,
  ThemeSubtitleSmall,
  ThemeTextArea,
} from "../../styles/typography";
import ModalEditWork from "./styles";

interface IEditWorkModalProps {
  actualWork: IWork;
}

const EditWorkModal = ({ actualWork }: IEditWorkModalProps) => {
  const { editWork, deleteWork } = useWorksContext();
  const { closeModal } = useModalContext();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorkEdit>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Preencha todos os campos.");
  };

  return (
    <StyledModal>
      <motion.div
        key="edit-modal"
        initial={{ x: 300, scale: 0.5, opacity: 1 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{
          x: 500,
          scale: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <ModalEditWork errors={!!errors.title}>
          <div className="modal__header">
            <ThemeSubtitleSmall>Editar Projeto</ThemeSubtitleSmall>
            <button
              className="modal__close-button"
              onClick={() => closeModal()}
            >
              X
            </button>
          </div>

          <form
            className="modal__body"
            onSubmit={handleSubmit(
              (data) => editWork(actualWork.id, data),
              onError,
            )}
          >
            <FormGroup>
              <ThemeInput
                type="text"
                placeholder=" "
                defaultValue={actualWork.title}
                {...register("title")}
              />
              <ThemeLabel>Título</ThemeLabel>
            </FormGroup>

            <FormGroupTextArea>
              <ThemeTextArea
                placeholder=" "
                defaultValue={actualWork.description}
                {...register("description")}
              />
              <ThemeLabel>Descrição</ThemeLabel>
            </FormGroupTextArea>

            <div className="modal__buttons">
              <ThemeButton bgcolor="primary" size="big" type="submit">
                Salvar alterações
              </ThemeButton>
              <ThemeButton
                bgcolor="lightGray"
                size="big"
                onClick={() => deleteWork(actualWork.id)}
                type="button"
              >
                Excluir
              </ThemeButton>
            </div>
          </form>
        </ModalEditWork>
      </motion.div>
    </StyledModal>
  );
};

export default EditWorkModal;
