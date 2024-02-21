export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.js|jsx|ts|tsx$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "^src/(.*)$": "<rootDir>/src/$1",
    "^constants/date(.*)$": "<rootDir>/src/constants/date$1",
  },
};
