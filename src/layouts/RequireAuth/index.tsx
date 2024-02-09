import { Navigate } from "react-router";
import { Outlet } from "react-router-dom";

import { isAuthSelector } from "store/selectors/userSelectors";
import { useAppSelector } from "hooks/useStore";
import { ROUTES } from "constants/routes";

export const RequireAuth = () => {
  const isAuth = useAppSelector(isAuthSelector);

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={ROUTES.home} />;
};
