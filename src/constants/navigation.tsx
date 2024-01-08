import { lazy } from "react";

import { ROUTES } from "./routes";

const Home = lazy(() =>
  import("pages/Home").then(({ Home }) => ({ default: Home })),
);

const SignUp = lazy(() =>
  import("pages/SignUp").then(({ SignUp }) => ({ default: SignUp })),
);

const Login = lazy(() =>
  import("pages/Login").then(({ Login }) => ({ default: Login })),
);

const { home, sign_up, login, feed } = ROUTES;

export const NAVIGATION = {
  Home: {
    path: home,
    element: <Home />,
  },
  SignUp: {
    path: sign_up,
    element: <SignUp />,
  },
  Login: {
    path: login,
    element: <Login />,
  },
};

export const REQUIRE_AUTH_NAVIGATION = {
  Feed: {
    path: feed,
    element: <div>FEED</div>,
  },
};
