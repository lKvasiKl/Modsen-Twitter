import { AppRootStateType } from "../index";

export const isAuthSelector = (state: AppRootStateType) => state.user.isAuth;
