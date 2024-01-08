import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { isAuthSelector } from "store/selectors/userSelectors";
import { ROUTES } from "constants/routes";

export const RequireAuth = () => {
  const isAuth = useSelector(isAuthSelector);

  if (isAuth) {
    return <Outlet />;
  }

  return <Navigate to={ROUTES.home} />;
};
