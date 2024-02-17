import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Theme } from "types";

import { AppInitialState, Popup } from "./type";

const initialState: AppInitialState = {
  theme: Theme.Light,
  notification: {
    isVisible: false,
    message: "",
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state: AppInitialState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setNotification: (state: AppInitialState, action: PayloadAction<Popup>) => {
      state.notification = action.payload;
    },
  },
});

export const { setTheme, setNotification } = appSlice.actions;
export const appReducer = appSlice.reducer;
