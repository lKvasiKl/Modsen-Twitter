import { createAsyncThunk } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";

import { setError } from "store/slice/userSlice";
import { signUpWithEmail } from "services/authService";
import { IMAGES } from "constants/images";
import { User } from "types";

import { EMAIL_SIGNUP, SIGNUP_ERROR } from "./config";

const { defaultUserPhoto } = IMAGES;

export const signUpWithEmailThunk = createAsyncThunk(
  EMAIL_SIGNUP,
  async (options: FieldValues, { dispatch }) => {
    try {
      const {
        email,
        password,
        name,
        phone,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
      } = options;

      const dateOfBirth = new Date(birthdayYear, birthdayMonth, birthdayDay);

      const userData: User = {
        email,
        name,
        phone,
        dateOfBirth,
        photo: defaultUserPhoto,
      };

      const user = await signUpWithEmail(userData, password);

      return user;
    } catch (error) {
      dispatch(setError(SIGNUP_ERROR));
    }
  },
);
