import { createAsyncThunk } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";

import { setError, setUser } from "store/slice/userSlice";
import { signInWithGoogle, signUpWithEmail } from "services/authService";
import { getUserById } from "services/databaseService";
import { createUserData, getFirstName } from "utils/userData";
import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { IMAGES } from "constants/images";
import { db } from "firebaseConfig";
import { User } from "types";

import { EMAIL_SIGNUP, GOOGLE_SIGNUP, SIGNUP_ERROR } from "./config";

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

export const signUpWithGoogleThunk = createAsyncThunk(
  GOOGLE_SIGNUP,
  async (_, { dispatch }) => {
    try {
      const googleAccount = await signInWithGoogle();
      const { uid, email, displayName, phoneNumber, photoURL } = googleAccount;

      const name = getFirstName(displayName);
      const photo = photoURL || defaultUserPhoto;

      if (!displayName || !email) {
        //TODO NOTIFICATIONS
        throw new Error("Error with google account");
      }

      const existedUser = (await getUserById(uid)) as User;

      if (existedUser) {
        dispatch(setUser(existedUser));
      } else {
        const userData = createUserData(uid, email, name, phoneNumber, photo);
        await setDoc(doc(db, USERS_COLLECTION, uid), userData);

        dispatch(setUser(userData));
      }
    } catch (error) {
      dispatch(setError(SIGNUP_ERROR));
    }
  },
);
