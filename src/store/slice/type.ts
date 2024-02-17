import { Theme, User } from "types";

export interface AppInitialState {
  theme: Theme;
  notification: {
    isVisible: boolean;
    message: string;
  };
}

export interface UserInitialState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
}

export interface Popup {
  isVisible: boolean;
  message: string;
}
