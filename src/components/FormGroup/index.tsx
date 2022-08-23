import { UseFormRegister } from "react-hook-form";

import { FormGroupStyled } from "../../styles/formGroup";
import { ThemeInput, ThemeLabel } from "../../styles/typography";
import ErrorMessage from "../ErrorMessage";

interface IFormGroupProps {
  errors?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  label: string;
  registerName: string;
  defaultValue?: string;
}

export const FormGroup = ({
  errors,
  register,
  registerName,
  label,
  defaultValue,
}: IFormGroupProps) => {
  return (
    <FormGroupStyled errors={!!errors}>
      <ThemeInput
        type="text"
        placeholder=" "
        {...register(registerName)}
        defaultValue={defaultValue}
      />
      <ThemeLabel>{label}</ThemeLabel>
      {!!errors && <ErrorMessage error={errors} />}
    </FormGroupStyled>
  );
};
