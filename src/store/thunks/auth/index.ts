import { createAsyncThunk } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";

import { setUser } from "store/slice/userSlice";
import { signInWithGoogle, signUpWithEmail } from "services/authService";
import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { setNotification } from "store/slice/appSlice";
import { IMAGES } from "constants/images";
import { db } from "firebaseConfig";
import { User } from "types";
import {
  createUserData,
  formatPhoneNumber,
  getFirstName,
} from "utils/userData";
import {
  getUserByEmail,
  getUserById,
  getUserByPhone,
} from "services/databaseService";

import {
  EMAIL_ALREDY_IN_USE_ERROR,
  EMAIL_SIGNUP,
  GOOGLE_ACCOUNT_ERROR,
  GOOGLE_SIGNUP,
  PHONE_ALREDY_IN_USE_ERROR,
} from "./config";

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
      const phoneNumber = formatPhoneNumber(phone);

      const userData: User = {
        email,
        name,
        phone: phoneNumber,
        dateOfBirth,
        photo: defaultUserPhoto,
      };

      const existingEmailUser = await getUserByEmail(email);
      if (existingEmailUser) {
        throw new Error(EMAIL_ALREDY_IN_USE_ERROR);
      }

      const existingPhoneUser = await getUserByPhone(phoneNumber);
      if (existingPhoneUser) {
        throw new Error(PHONE_ALREDY_IN_USE_ERROR);
      }

      const user = await signUpWithEmail(userData, password);

      return user;
    } catch (error) {
      dispatch(
        setNotification({ isVisible: true, message: (error as Error).message }),
      );

      throw error;
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
        throw new Error(GOOGLE_ACCOUNT_ERROR);
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
      dispatch(
        setNotification({ isVisible: true, message: (error as Error).message }),
      );

      throw error;
    }
  },
);
