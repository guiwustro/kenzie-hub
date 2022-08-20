import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import * as yup from "yup";

import { useModalContext } from "../../contexts/modalContext";
import {
  ITechData,
  ITechEdit,
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
import { ModalEditTech } from "./styles";

interface IEditTechModalProps {
  actualTech: ITechData;
}

const EditTechModal = ({ actualTech }: IEditTechModalProps) => {
  const { editTech, deleteTech } = useTechnologiesContext();
  const { setOpenEditTechModal } = useModalContext();
  const formSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório").notOneOf(["DEFAULT"]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechEdit>({
    resolver: yupResolver(formSchema),
  });

  const onError = () => {
    toast.error("Preencha todos os campos corretamente");
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
        <ModalEditTech errors={!!errors.status}>
          <div className="modal__header">
            <ThemeSubtitleSmall>Editar Tecnologia</ThemeSubtitleSmall>
            <button
              className="modal__close-button"
              onClick={() => setOpenEditTechModal(false)}
            >
              X
            </button>
          </div>

          <form
            className="modal__body"
            onSubmit={handleSubmit(
              (data) => editTech(actualTech.id, data),
              onError,
            )}
          >
            <FormGroup>
              <ThemeInput
                type="text"
                placeholder=" "
                defaultValue={actualTech.title}
                disabled
              />
              <ThemeLabel>Nome</ThemeLabel>
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
            <div className="modal__buttons">
              <ThemeButton bgcolor="primary" size="big" type="submit">
                Salvar alterações
              </ThemeButton>
              <ThemeButton
                bgcolor="lightGray"
                size="big"
                onClick={() => deleteTech(actualTech.id)}
                type="button"
              >
                Excluir
              </ThemeButton>
            </div>
          </form>
        </ModalEditTech>
      </motion.div>
    </StyledModal>
  );
};

export default EditTechModal;
