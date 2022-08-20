import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { useModalContext } from "../../contexts/modalContext";
import { IWorkAdd, useWorksContext } from "../../contexts/worksContext";
import { ThemeButton } from "../../styles/buttons";
import { FormGroup, FormGroupTextArea } from "../../styles/formGroup";
import { StyledModal } from "../../styles/modal";
import {
  ThemeInput,
  ThemeLabel,
  ThemeSubtitleSmall,
  ThemeTextArea,
} from "../../styles/typography";
import ErrorMessage from "../ErrorMessage";
import ModalAddWork from "./styles";

const AddWorkModal = () => {
  const { addWork, works } = useWorksContext();
  const { setOpenAddWorkModal } = useModalContext();

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
        <ModalAddWork>
          <div className="modal__header">
            <ThemeSubtitleSmall>Cadastrar Projeto</ThemeSubtitleSmall>
            <button
              className="modal__close-button"
              onClick={() => setOpenAddWorkModal(false)}
            >
              X
            </button>
          </div>

          <form
            className="modal__body"
            onSubmit={handleSubmit(addWork, onError)}
          >
            <FormGroup errors={!!errors.title}>
              <ThemeInput type="text" placeholder=" " {...register("title")} />
              <ThemeLabel>Título</ThemeLabel>
              {errors.title && <ErrorMessage error={errors.title.message} />}
            </FormGroup>

            <FormGroupTextArea errors={!!errors.description}>
              <ThemeTextArea placeholder=" " {...register("description")} />
              <ThemeLabel>Descrição</ThemeLabel>
              {errors.title && <ErrorMessage error={errors.title.message} />}
            </FormGroupTextArea>

            <FormGroup errors={!!errors.deploy_url}>
              <ThemeInput
                type="text"
                placeholder=" "
                {...register("deploy_url")}
              />
              <ThemeLabel>Link do projeto</ThemeLabel>
              {errors.title && <ErrorMessage error={errors.title.message} />}
            </FormGroup>

            <ThemeButton bgcolor="primary" size="big" type="submit">
              Cadastrar Tecnologia
            </ThemeButton>
          </form>
        </ModalAddWork>
      </motion.div>
    </StyledModal>
  );
};

export default AddWorkModal;
