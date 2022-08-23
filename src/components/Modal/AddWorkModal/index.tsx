import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useModalContext } from "../../../contexts/modalContext";
import { IWorkAdd, useWorksContext } from "../../../contexts/worksContext";
import { ThemeButton } from "../../../styles/buttons";
import { FormGroupTextAreaStyled } from "../../../styles/formGroup";
import {
  ThemeLabel,
  ThemeSubtitleSmall,
  ThemeTextArea,
} from "../../../styles/typography";
import ErrorMessage from "../../ErrorMessage";
import { FormGroup } from "../../FormGroup";
import ModalAddWork from "./styles";

const AddWorkModal = () => {
  const { addWork, works } = useWorksContext();
  const { closeModal } = useModalContext();

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "duplicated",
        "Essa tecnologia já existe.",
        (techName) => !hasWork(techName),
      ),
    description: yup.string().required("Campo obrigatório"),
    deploy_url: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWorkAdd>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Preencha todos os campos corretamente");
  };

  const hasWork = (techName: string | undefined) => {
    return works.some(({ title }) => title === techName);
  };

  return (
    <ModalAddWork>
      <div className="modal__header">
        <ThemeSubtitleSmall>Cadastrar Projeto</ThemeSubtitleSmall>
        <button className="modal__close-button" onClick={() => closeModal()}>
          X
        </button>
      </div>

      <form className="modal__body" onSubmit={handleSubmit(addWork, onError)}>
        <FormGroup
          label="Título"
          register={register}
          errors={errors.title?.message}
          registerName={"title"}
        />

        <FormGroupTextAreaStyled errors={!!errors.description}>
          <ThemeTextArea placeholder=" " {...register("description")} />
          <ThemeLabel>Descrição</ThemeLabel>
          {errors.title && <ErrorMessage error={errors.title.message} />}
        </FormGroupTextAreaStyled>

        <FormGroup
          label="Link do projeto"
          register={register}
          errors={errors.deploy_url?.message}
          registerName={"deploy_url"}
        />

        <ThemeButton bgcolor="primary" size="big" type="submit">
          Cadastrar Tecnologia
        </ThemeButton>
      </form>
    </ModalAddWork>
  );
};

export default AddWorkModal;
