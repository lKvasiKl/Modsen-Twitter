import { ReactNode } from "react";

import { Theme } from "types";

export type Children = ReactNode;

export interface ThemeWrapperProps {
  children: Children;
  theme: Theme;
}
