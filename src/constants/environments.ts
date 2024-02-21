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
  [ENV_VARIABLE_KEYS.firebaseApiKey]:
    import.meta.env.VITE_FIREBASE_API_KEY || "",
  [ENV_VARIABLE_KEYS.firebaseAuthDomain]:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  [ENV_VARIABLE_KEYS.firebaseProjectId]:
    import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  [ENV_VARIABLE_KEYS.firebaseStorageBucket]:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  [ENV_VARIABLE_KEYS.firebaseMessagingSenderId]:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  [ENV_VARIABLE_KEYS.firebaseAppId]: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

export const getEnvVariables = (key: EnvVariableKeys): string =>
  ENV_VARIABLES[key];
