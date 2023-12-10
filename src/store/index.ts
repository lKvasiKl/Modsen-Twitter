import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./slice/appSlice";

const rootReducer = combineReducers({
  app: appReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
