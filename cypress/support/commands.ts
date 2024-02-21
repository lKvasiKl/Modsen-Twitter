// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import { initializeApp } from "firebase/app";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import { USERS_COLLECTION } from "constants/dbCollectionNames";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: Cypress.env("firebase").apiKey,
  authDomain: Cypress.env("firebase").authDomain,
  projectId: Cypress.env("firebase").projectId,
  storageBucket: Cypress.env("firebase").storageBucket,
  messagingSenderId: Cypress.env("firebase").messagingSenderId,
  appId: Cypress.env("firebase").appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUserByEmail = async (email: string) => {
  const queryConfig = query(
    collection(db, USERS_COLLECTION),
    where("email", "==", email),
  );

  const querySnapshot = await getDocs(queryConfig);
  const userData = querySnapshot.docs[0]?.data();

  return userData;
};

Cypress.Commands.add("getUserByEmail", async (email: string) => {
  return await getUserByEmail(email);
});

Cypress.Commands.add("deleteTestUser", async (email: string) => {
  const auth = getAuth(app);
  const user = await getUserByEmail(email);
  const uid = user.id;

  await auth.currentUser?.delete();
  await deleteDoc(doc(db, USERS_COLLECTION, uid));
});
