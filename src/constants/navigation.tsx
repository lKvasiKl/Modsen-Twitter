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

const Feed = lazy(() =>
  import("pages/Feed").then(({ Feed }) => ({ default: Feed })),
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
    element: <Feed />,
  },
};

export const ADDITIONAL_NAVIGATION = {
  About: {
    name: "About",
    path: "#",
  },
  Help: {
    name: "Help Center",
    path: "#",
  },
  Terms: {
    name: "Terms of Service",
    path: "#",
  },
  Privacy: {
    name: "Privacy Policy",
    path: "#",
  },
  Cookie: {
    name: "Cookie Policy",
    path: "#",
  },
  Ads: {
    name: "Ads info",
    path: "#",
  },
  Blog: {
    name: "Blog",
    path: "#",
  },
  Status: {
    name: "Status",
    path: "#",
  },
  Carrres: {
    name: "Carrres",
    path: "#",
  },
  Brand: {
    name: "Brand Resources",
    path: "#",
  },
  Advertsing: {
    name: "Advertsing",
    path: "#",
  },
  Marketing: {
    name: "Marketing",
    path: "#",
  },
  ForBusinnes: {
    name: "Twitter for Business",
    path: "#",
  },
  Developers: {
    name: "Developers",
    path: "#",
  },
  Directory: {
    name: "Directory",
    path: "#",
  },
  Settings: {
    name: "Settings",
    path: "#",
  },
};
