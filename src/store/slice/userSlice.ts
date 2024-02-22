import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "types/index";
import {
  logInWithEmailOrPhoneThunk,
  signUpWithEmailThunk,
} from "store/thunks/auth";

import { UserInitialState } from "./type";

const initialState: UserInitialState = {
  user: {} as User,
  isAuth: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.user = {} as User;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      signUpWithEmailThunk.fulfilled,
      (state, action: PayloadAction<User | undefined>) => {
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload || ({} as User);
      },
    );
    builder.addCase(signUpWithEmailThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(signUpWithEmailThunk.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
    });
    builder.addCase(
      logInWithEmailOrPhoneThunk.fulfilled,
      (state, action: PayloadAction<User | undefined>) => {
        state.isAuth = true;
        state.isLoading = false;
        state.user = action.payload || ({} as User);
      },
    );
    builder.addCase(logInWithEmailOrPhoneThunk.pending, (state) => {
      state.isAuth = false;
      state.isLoading = true;
    });
    builder.addCase(logInWithEmailOrPhoneThunk.rejected, (state) => {
      state.isAuth = false;
      state.isLoading = false;
    });
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const userReucer = userSlice.reducer;
