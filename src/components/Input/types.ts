import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
  label?: string;
  type?: "text" | "email" | "tel" | "password";
  name: string;
  placeholder?: string;
  error?: string;
  register: UseFormRegister<FieldValues>;
  onChange: ({ name, value }: { name: string; value: string }) => void;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;

export interface IsErrorProp {
  $isError: boolean;
}
