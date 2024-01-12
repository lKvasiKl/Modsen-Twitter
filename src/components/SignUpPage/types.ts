import { InputProps } from "components/Input/types";

export interface InputsConfig extends Omit<InputProps, "onChange"> {}
export interface PasswordInputsConfig extends Omit<InputsConfig, "type"> {}
