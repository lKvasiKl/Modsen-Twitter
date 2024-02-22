import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { format } from "date-fns";

import { DATE_FORMAT } from "constants/date";
import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { auth, db } from "firebaseConfig/index";
import { User } from "types";
import { getUserByPhone } from "./databaseService";

export const signUpWithEmail = async (
  { email, dateOfBirth, ...userData }: User,
  password: string,
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const userUid = userCredential.user.uid;
    const user = {
      id: userUid,
      email,
      dateOfBirth: format(dateOfBirth, DATE_FORMAT),
      ...userData,
    };

    await setDoc(doc(db, USERS_COLLECTION, userUid), user);

    return user;
  } catch (error) {
    throw error;
  }
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user: googleAccount } = await signInWithPopup(auth, provider);

  return googleAccount;
};

export const logInWithEmailOrPhone = async (
  emailOrPhone: string,
  password: string,
) => {
  try {
    const isEmail = emailOrPhone.includes("@");
    const email: string = isEmail
      ? emailOrPhone
      : (await getUserByPhone(emailOrPhone)).email;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const userUid = userCredential.user.uid;
    const user = (await getDoc(doc(db, USERS_COLLECTION, userUid))).data();

    return user;
  } catch (error) {
    throw error;
  }
};
