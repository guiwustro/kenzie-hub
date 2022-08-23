import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { BiHide, BiShow } from "react-icons/bi";

import { FormGroupStyled } from "../../styles/formGroup";
import { ThemeInput, ThemeLabel } from "../../styles/typography";
import ErrorMessage from "../ErrorMessage";
import { FormGroupPasswordStyled } from "./styles";

interface IFormGroupProps {
  errors?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  isPasswordWrong?: boolean;
  label: string;
  registerName: string;
}

export const FormGroupPassword = ({
  errors,
  register,
  isPasswordWrong,
  label,
  registerName,
}: IFormGroupProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormGroupPasswordStyled>
      <FormGroupStyled className="form__group">
        <ThemeInput
          type={showPassword ? "text" : "password"}
          placeholder=" "
          {...register(registerName)}
        />
        <ThemeLabel htmlFor="password">{label}</ThemeLabel>
        <button
          type="button"
          className="password-show__button"
          onClick={() => setShowPassword((old) => !old)}
        >
          {showPassword ? <BiShow /> : <BiHide />}
        </button>
        {!!errors && <ErrorMessage error={errors} />}
        {isPasswordWrong && <ErrorMessage error="Senha incorreta." />}
      </FormGroupStyled>
    </FormGroupPasswordStyled>
  );
};
