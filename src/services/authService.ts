import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { format } from "date-fns";

import { DATE_FORMAT } from "constants/date";
import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { auth, db } from "firebaseConfig/index";
import { User } from "types";

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
