import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./slice/appSlice";
import { userReucer } from "./slice/userSlice";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReucer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
