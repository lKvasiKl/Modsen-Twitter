import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { UserInitialState } from "./type";

const initialState: UserInitialState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth: (state: UserInitialState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setIsAuth } = userSlice.actions;
export const userReucer = userSlice.reducer;
