import { collection, getDocs, query, where } from "firebase/firestore";

import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { db } from "firebaseConfig";
import { formatPhoneNumber } from "utils/userData";

export const getUserByEmail = async (email: string) => {
  const queryConfig = query(
    collection(db, USERS_COLLECTION),
    where("email", "==", email),
  );

  const querySnapshot = await getDocs(queryConfig);
  const userData = querySnapshot.docs[0]?.data();

  return userData;
};

export const getUserByPhone = async (phone: string) => {
  const phoneNumber = formatPhoneNumber(phone);

  const queryConfig = query(
    collection(db, USERS_COLLECTION),
    where("phone", "==", phoneNumber),
  );

  const querySnapshot = await getDocs(queryConfig);
  const userData = querySnapshot.docs[0]?.data();

  return userData;
};

export const getUserById = async (id: string) => {
  const queryConfig = query(
    collection(db, USERS_COLLECTION),
    where("id", "==", id),
  );

  const querySnapshot = await getDocs(queryConfig);
  const userData = querySnapshot.docs[0]?.data();

  return userData;
};
