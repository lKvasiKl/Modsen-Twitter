import { ReactNode } from "react";

import { Theme } from "types";

export interface Children {
  children: ReactNode;
}

export interface ThemeWrapperProps extends Children {
  theme: Theme;
}
