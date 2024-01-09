import { COLORS, FONTS, SPACES } from "./styles";

const BASE_THEME = {
  colors: {
    ...COLORS,
  },
  fonts: {
    ...FONTS,
  },
  spaces: {
    ...SPACES,
  },
};

export const THEME = {
  light: {
    ...BASE_THEME,
    backgroundColor: COLORS.white,
    textColor: COLORS.black,
  },
  dark: {
    ...BASE_THEME,
    backgroundColor: COLORS.darkModeBackground,
    textColor: COLORS.white,
  },
};
