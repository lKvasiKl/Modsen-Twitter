import { ICONS, IMAGE_SIZE } from "constants/images";

import { InputsConfig, PasswordInputsConfig } from "./types";

const { twitterLogo } = ICONS;

export const LOGO_ICON_CONFIG = {
  alt: "Twitter Logo",
  src: twitterLogo,
  draggable: false,
  ...IMAGE_SIZE.M,
};

export const TITLE: string = "Create an account";
export const SUBTITLE: string = "Date of birth";
export const SUBTITL_INFO_TEXT: string =
  "This information will not be publicly available. Verify your age, even if the account is for a company, pet, etc.";
export const CREATE_ACC_BUTTON: string = "Create account";
export const ACCOUNT_EXIST_TEXT: string = "Already have an account?";
export const LINK_TO_LOGIN_TEXT: string = "Log in";

export const INPUTS_PROPS: InputsConfig[] = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Kirill",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
  },
  {
    type: "tel",
    name: "phone",
    label: "Phone",
    placeholder: "+375 (44) 111-22-33",
  },
];

export const PASSWORD_INPUTS_PROPS: PasswordInputsConfig[] = [
  {
    name: "password",
    label: "Password",
    placeholder: "qwerty12345",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    placeholder: "***********",
  },
];
