import { AppRootStateType } from "../index";

export const getUserSelector = (state: AppRootStateType) => state.user.user;
export const isAuthSelector = (state: AppRootStateType) => state.user.isAuth;
export const isUserLoadingSelector = (state: AppRootStateType) =>
  state.user.isLoading;
