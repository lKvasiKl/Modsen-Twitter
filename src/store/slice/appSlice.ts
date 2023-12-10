import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Theme } from "types";

import { AppInitialState } from "./type";

const initialState: AppInitialState = {
  theme: Theme.Light,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state: AppInitialState, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;
export const appReducer = appSlice.reducer;
