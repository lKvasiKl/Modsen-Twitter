import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppRootStateType } from "store/index";

import { RootDispatchThunkType } from "./types";

export const useAppDispatch = () => useDispatch<RootDispatchThunkType>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;
