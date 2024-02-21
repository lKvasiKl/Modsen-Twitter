import { AppRootStateType } from "../index";

export const getThemeSelector = (state: AppRootStateType) => state.app.theme;
export const getNotificationSelector = (state: AppRootStateType) =>
  state.app.notification;
