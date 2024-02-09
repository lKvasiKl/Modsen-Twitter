import { collection, getDocs, query, where } from "firebase/firestore";

import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { db } from "firebaseConfig";

export const getUserById = async (id: string) => {
  const queryConfig = query(
    collection(db, USERS_COLLECTION),
    where("id", "==", id),
  );

  const querySnapshot = await getDocs(queryConfig);
  const userData = querySnapshot.docs[0].data();

  return userData;
};
