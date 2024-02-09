import { Theme, User } from "types";

export interface AppInitialState {
  theme: Theme;
}

export interface UserInitialState {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
  isError: string;
}
