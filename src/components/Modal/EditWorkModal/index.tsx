import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IWork } from "../../../contexts/authUserContext";
import { useModalContext } from "../../../contexts/modalContext";
import { useWorksContext, IWorkEdit } from "../../../contexts/worksContext";
import { ThemeButton } from "../../../styles/buttons";
import { FormGroupTextAreaStyled } from "../../../styles/formGroup";
import {
  ThemeLabel,
  ThemeSubtitleSmall,
  ThemeTextArea,
} from "../../../styles/typography";
import { FormGroup } from "../../FormGroup";
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
    <ModalEditWork errors={!!errors.title}>
      <div className="modal__header">
        <ThemeSubtitleSmall>Editar Projeto</ThemeSubtitleSmall>
        <button className="modal__close-button" onClick={() => closeModal()}>
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
        <FormGroup
          errors={errors.title?.message}
          register={register}
          label="Título"
          defaultValue={actualWork.title}
          registerName={"title"}
        />

        <FormGroupTextAreaStyled>
          <ThemeTextArea
            placeholder=" "
            defaultValue={actualWork.description}
            {...register("description")}
          />
          <ThemeLabel>Descrição</ThemeLabel>
        </FormGroupTextAreaStyled>

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
  );
};

export default EditWorkModal;
