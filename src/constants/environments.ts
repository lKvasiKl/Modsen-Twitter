import { EnvVariableKeys, EnvVariables } from "./types";

export const ENV_VARIABLE_KEYS = {
  firebaseApiKey: "firebaseApiKey",
  firebaseAuthDomain: "firebaseAuthDomain",
  firebaseProjectId: "firebaseProjectId",
  firebaseStorageBucket: "firebaseStorageBucket",
  firebaseMessagingSenderId: "firebaseMessagingSenderId",
  firebaseAppId: "firebaseAppId",
} as const;

const ENV_VARIABLES: EnvVariables = {
  [ENV_VARIABLE_KEYS.firebaseApiKey]: process.env.VITE_FIREBASE_API_KEY || "",
  [ENV_VARIABLE_KEYS.firebaseAuthDomain]:
    process.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  [ENV_VARIABLE_KEYS.firebaseProjectId]:
    process.env.VITE_FIREBASE_PROJECT_ID || "",
  [ENV_VARIABLE_KEYS.firebaseStorageBucket]:
    process.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  [ENV_VARIABLE_KEYS.firebaseMessagingSenderId]:
    process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  [ENV_VARIABLE_KEYS.firebaseAppId]: process.env.VITE_FIREBASE_APP_ID || "",
};

export const getEnvVariables = (key: EnvVariableKeys): string =>
  ENV_VARIABLES[key];
