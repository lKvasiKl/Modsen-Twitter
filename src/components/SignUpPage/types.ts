import { InputProps } from "components/Input/types";

export interface InputsConfig
  extends Omit<InputProps, "onChange" | "register"> {}
export interface PasswordInputsConfig extends Omit<InputsConfig, "type"> {}

export interface ChangeForm {
  name: string;
  value: string | number;
}

export const BIRTHDAY_MONTH_NAME: string = "birthdayMonth";
export const BIRTHDAY_DAY_NAME: string = "birthdayDay";
export const BIRTHDAY_YEAR_NAME: string = "birthdayYear";
