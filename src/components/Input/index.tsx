import { BaseInput } from "constants/styles/global";

import { InputChangeEvent, InputProps } from "./types";

import { InputWrapper, Label } from "./styled";

export const Input = ({
  label,
  type,
  name,
  placeholder,
  error,
  register,
  onChange,
}: InputProps) => {
  const isError = Boolean(error);
  const LABEL_TEXT = error ? error : label;

  const handleChange = (event: InputChangeEvent) => {
    const value = event.target.value;

    onChange({ name, value });
  };

  return (
    <InputWrapper $isError={isError}>
      <BaseInput
        type={type}
        placeholder={placeholder}
        {...register(name, { onChange: handleChange })}
      />
      <Label $isError={isError}>{LABEL_TEXT}</Label>
    </InputWrapper>
  );
};
