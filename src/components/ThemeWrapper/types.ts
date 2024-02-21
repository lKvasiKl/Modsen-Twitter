import { Theme } from "types";

export interface Children {
  children: React.ReactNode;
}

export interface ThemeWrapperProps extends Children {
  theme: Theme;
}
