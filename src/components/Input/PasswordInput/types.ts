import { FieldValues, UseFormRegister } from "react-hook-form";

export interface PasswordPostfixProps {
  isVisible: boolean;
  onClick: () => void;
}

export interface PasswordInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
  onChange: ({ name, value }: { name: string; value: string }) => void;
}
