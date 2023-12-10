import { ENV_VARIABLE_KEYS } from "./environments";

export type EnvVariableKeys = keyof typeof ENV_VARIABLE_KEYS;
export type EnvVariables = {
  [key in EnvVariableKeys]: string;
};
