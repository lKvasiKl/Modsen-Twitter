import { AppRootStateType } from "../index";

export const getThemeSelector = (state: AppRootStateType) => state.app.theme;
