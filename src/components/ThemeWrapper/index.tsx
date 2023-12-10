import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { getThemeSelector } from "store/selectors/appSelectors";
import { THEME } from "constants/theme";
import { Theme } from "types";

import { Children, ThemeWrapperProps } from "./types";

const ThemeWrapper = ({ children, theme }: ThemeWrapperProps) => {
  const currentTheme = theme === Theme.Light ? THEME.light : THEME.dark;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export const ThemeWrapperProvider = (children: Children) => {
  const theme = useSelector(getThemeSelector);

  return <ThemeWrapper theme={theme}>{children}</ThemeWrapper>;
};
