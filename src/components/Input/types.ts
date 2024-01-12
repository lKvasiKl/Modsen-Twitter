import { ChangeEvent } from "react";

export interface InputProps {
  label?: string;
  type?: "text" | "email" | "tel" | "password";
  name: string;
  placeholder?: string;
  onChange: ({ name, value }: { name: string; value: string }) => void;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement>;
