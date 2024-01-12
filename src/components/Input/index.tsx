import { BaseInput } from "constants/styles/global";

import { InputChangeEvent, InputProps } from "./types";

import { InputWrapper, Label } from "./styled";

export const Input = ({
  label,
  type,
  name,
  placeholder,
  onChange,
}: InputProps) => {
  const handleChange = (event: InputChangeEvent) => {
    const value = event.target.value;

    onChange({ name, value });
  };

  return (
    <InputWrapper>
      <BaseInput
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Label>{label}</Label>
    </InputWrapper>
  );
};
