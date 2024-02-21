import { InputsConfig } from "components/SignUpPage/types";
import { ICONS, IMAGE_SIZE } from "constants/images";

const { twitterLogo } = ICONS;

export const DEFAULT_FORM_STATE = {
  emailOrPhone: "",
  password: "",
};

export const LOGO_ICON_CONFIG = {
  alt: "Twitter Logo",
  src: twitterLogo,
  draggable: false,
  ...IMAGE_SIZE.M,
};

export const INPUT_PROPS: InputsConfig = {
  name: "emailOrPhone",
  label: "Email or phone:",
  type: "text",
  placeholder: "example@gmail.com",
};

export const PASSWORD_INPUT_PROPS: InputsConfig = {
  name: "password",
  label: "Password",
  placeholder: "qwerty12345",
};

export const TITLE: string = "Log in to Twitter";
export const LOGIN_BUTTON: string = "Log in";
export const ACCOUNT_DOESNT_EXIST_TEXT: string = "Don't have an account?";
export const LINK_TO_REGISTER_TEXT: string = "Sign Up";
export const LINK_TO_HOME_TEXT: string = "Go to Home";
