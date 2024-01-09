import { IMAGES, ICONS, IMAGE_SIZE } from "constants/images";

const { twitterBackground } = IMAGES;
const { twitterLogo, googleLogo } = ICONS;

export const BANNER_CONFIG = {
  alt: "Twitter Banner",
  src: twitterBackground,
  draggable: false,
};

export const LOGO_ICON_CONFIG = {
  alt: "Twitter Logo",
  src: twitterLogo,
  draggable: false,
  ...IMAGE_SIZE.L,
};

export const GOOGLE_ICON_CONFIG = {
  alt: "Google Logo",
  src: googleLogo,
  draggable: false,
  ...IMAGE_SIZE.M,
};

export const TITLE: string = "Happening now";
export const SUBTITLE: string = "Join Twitter today";
export const GOOGLE_SIGNUP_TEXT: string = "Sign up with Google";
export const EMAIL_SIGNUP_TEXT: string = "Sign up with email";
