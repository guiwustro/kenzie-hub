import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { useModalContext } from "../../contexts/modalContext";
import {
  ITechAdd,
  useTechnologiesContext,
} from "../../contexts/tecnologiesContext";
import { ThemeButton } from "../../styles/buttons";
import { FormGroup } from "../../styles/formGroup";
import { StyledModal } from "../../styles/modal";
import {
  ThemeInput,
  ThemeLabel,
  ThemeSubtitleSmall,
} from "../../styles/typography";
import ErrorMessage from "../ErrorMessage";
import { ModalAddTech } from "./styles";

const AddTechModal = () => {
  const { addTech, technologies } = useTechnologiesContext();
  const { closeModal } = useModalContext();

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("Campo obrigatório")
      .test(
        "duplicated",
        "Essa tecnologia já existe.",
        (techName) => !hasTech(techName),
      ),
    status: yup.string().required("Campo obrigatório").notOneOf(["DEFAULT"]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechAdd>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Preencha todos os campos corretamente");
  };

  const hasTech = (techName: string | undefined) => {
    return technologies.some(({ title }) => title === techName);
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
        <ModalAddTech errors={!!errors.status}>
          <div className="modal__header">
            <ThemeSubtitleSmall>Cadastrar Tecnologia</ThemeSubtitleSmall>
            <button
              className="modal__close-button"
              onClick={() => closeModal()}
            >
              X
            </button>
          </div>

          <form
            className="modal__body"
            onSubmit={handleSubmit(addTech, onError)}
          >
            <FormGroup errors={!!errors.title}>
              <ThemeInput type="text" placeholder=" " {...register("title")} />
              <ThemeLabel>Nome</ThemeLabel>
              {errors.title && <ErrorMessage error={errors.title.message} />}
            </FormGroup>

            <div className="form-select__status">
              <select defaultValue={"DEFAULT"} {...register("status")}>
                <option disabled value="DEFAULT">
                  Selecione um Status
                </option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status && (
                <ErrorMessage error={"Este campo é obrigatório"} />
              )}
            </div>

            <ThemeButton bgcolor="primary" size="big" type="submit">
              Cadastrar Tecnologia
            </ThemeButton>
          </form>
        </ModalAddTech>
      </motion.div>
    </StyledModal>
  );
};

export default AddTechModal;