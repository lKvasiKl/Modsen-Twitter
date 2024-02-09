import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { useAppSelector } from "hooks/useStore";
import { PublicRoutes, RequireAuthRoutes } from "components/Router";
import {
  isAuthSelector,
  getUserSelector,
  isUserLoadingSelector,
} from "store/selectors/userSelectors";

const { profile } = ROUTES;

export const App = () => {
  const navigate = useNavigate();

  const { id } = useAppSelector(getUserSelector);
  const isAuth = useAppSelector(isAuthSelector);
  const isUserLoading = useAppSelector(isUserLoadingSelector);

  useEffect(() => {
    if (isAuth) {
      navigate(`${profile}/${id}`);
    }
  }, [isAuth, id]);

  if (isUserLoading) {
    return <>LOADING...</>;
  }

  return isAuth ? <RequireAuthRoutes /> : <PublicRoutes />;
};
