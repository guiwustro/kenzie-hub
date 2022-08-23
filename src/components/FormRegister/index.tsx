import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { yupResolver } from "@hookform/resolvers/yup";

import {
  IUserRegister,
  useAuthUserContext,
} from "../../contexts/authUserContext";
import { ThemeButton } from "../../styles/buttons";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { formRegister } from "../../validations/registerUser";
import ErrorMessage from "../ErrorMessage";
import { FormGroup } from "../FormGroup";
import { FormGroupPassword } from "../FormGroupPassword";
import { Container } from "./styles";

interface IFormUserRegister extends IUserRegister {
  passwordConfirmation: string;
}

function FormRegister() {
  const { registerUser } = useAuthUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormUserRegister>({ resolver: yupResolver(formRegister) });

  const onError = () => {
    toast.error("Algum dos campos está incorreto");
  };

  return (
    <Container errors={!!errors.course_module}>
      <form onSubmit={handleSubmit(registerUser, onError)}>
        <ThemeTitle>Crie sua conta</ThemeTitle>
        <ThemeParagraph>Rápido e grátis, vamos nessa</ThemeParagraph>
        <FormGroup
          errors={errors.name?.message}
          label={"Nome *"}
          register={register}
          registerName={"name"}
        />

        <FormGroup
          errors={errors.email?.message}
          label={"E-mail *"}
          register={register}
          registerName={"email"}
        />

        <FormGroupPassword
          errors={errors.password?.message}
          label={"Crie sua senha *"}
          register={register}
          registerName={"password"}
        />

        <FormGroupPassword
          errors={errors.password?.message}
          label={"Confirme a senha *"}
          register={register}
          registerName={"passwordConfirmation"}
        />

        <FormGroup
          errors={errors.bio?.message}
          label={"Bio *"}
          register={register}
          registerName={"bio"}
        />

        <FormGroup
          errors={errors.contact?.message}
          label={"Contato *"}
          register={register}
          registerName={"contact"}
        />

        <div className="form-select">
          <select
            defaultValue={"DEFAULT"}
            id="course_module"
            {...register("course_module")}
          >
            <option disabled value="DEFAULT">
              Selecione um módulo
            </option>
            <option value="Primeiro módulo">Primeiro módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
            <option value="Terceiro módulo">Terceiro módulo</option>
            <option value="Quarto módulo">Quarto módulo</option>
            <option value="Quinto módulo">Quinto módulo</option>
            <option value="Sexto módulo">Sexto módulo</option>
          </select>
          {errors.course_module && (
            <ErrorMessage error={"Este campo é obrigatório"} />
          )}
        </div>
        <ThemeButton type="submit" bgcolor="primary" size="big">
          Cadastrar
        </ThemeButton>
      </form>
    </Container>
  );
}

export default FormRegister;
