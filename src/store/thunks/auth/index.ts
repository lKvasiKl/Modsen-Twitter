import { createAsyncThunk } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

import { setUser } from "store/slice/userSlice";
import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { setNotification } from "store/slice/appSlice";
import { IMAGES } from "constants/images";
import { db } from "firebaseConfig";
import { User } from "types";
import {
  logInWithEmailOrPhone,
  signInWithGoogle,
  signUpWithEmail,
} from "services/authService";
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
  EMAIL_OR_PHONE_LOGIN,
  EMAIL_SIGNUP,
  GOOGLE_ACCOUNT_ERROR,
  GOOGLE_SIGNUP,
  INVALID_CREDENTIAL_CODE,
  INVALID_CREDENTIAL_ERROR,
  LOGIN_ERROR,
  NOT_FOUND_CODE,
  PHONE_ALREDY_IN_USE_ERROR,
  USER_NOT_FOUND_ERROR,
} from "./config";

const { defaultUserPhoto } = IMAGES;

export const signUpWithEmailThunk = createAsyncThunk(
  EMAIL_SIGNUP,
  async (options: FieldValues, { dispatch, rejectWithValue }) => {
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
      const errorMessage = (error as Error).message;
      dispatch(setNotification({ isVisible: true, message: errorMessage }));

      return rejectWithValue({ message: errorMessage });
    }
  },
);

export const signUpWithGoogleThunk = createAsyncThunk(
  GOOGLE_SIGNUP,
  async (_, { dispatch, rejectWithValue }) => {
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
      const errorMessage = (error as Error).message;
      dispatch(setNotification({ isVisible: true, message: errorMessage }));

      return rejectWithValue({ message: errorMessage });
    }
  },
);

export const logInWithEmailOrPhoneThunk = createAsyncThunk(
  EMAIL_OR_PHONE_LOGIN,
  async (options: FieldValues, { dispatch, rejectWithValue }) => {
    try {
      const { emailOrPhone, password } = options;

      const user = await logInWithEmailOrPhone(emailOrPhone, password);

      return user as User;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      let errorMessage = LOGIN_ERROR;

      if (firebaseError.code === NOT_FOUND_CODE) {
        errorMessage = USER_NOT_FOUND_ERROR;
      } else if (firebaseError.code === INVALID_CREDENTIAL_CODE) {
        errorMessage = INVALID_CREDENTIAL_ERROR;
      }

      dispatch(setNotification({ isVisible: true, message: errorMessage }));

      return rejectWithValue({ message: errorMessage });
    }
  },
);
