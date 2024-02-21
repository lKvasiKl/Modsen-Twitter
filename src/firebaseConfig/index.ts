import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import { ENV_VARIABLE_KEYS, getEnvVariables } from "constants/environments";

const FIREBASE_API_KEY = getEnvVariables(ENV_VARIABLE_KEYS.firebaseApiKey);
const FIREBASE_AUTH_DOMAIN = getEnvVariables(
  ENV_VARIABLE_KEYS.firebaseAuthDomain,
);
const FIREBASE_PROJECT_ID = getEnvVariables(
  ENV_VARIABLE_KEYS.firebaseProjectId,
);
const FIREBASE_STORAGE_BUCKET = getEnvVariables(
  ENV_VARIABLE_KEYS.firebaseStorageBucket,
);
const FIREBASE_MESSAGING_SENDER_ID = getEnvVariables(
  ENV_VARIABLE_KEYS.firebaseMessagingSenderId,
);
const FIREBASE_APP_ID = getEnvVariables(ENV_VARIABLE_KEYS.firebaseAppId);

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
