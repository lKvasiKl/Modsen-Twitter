import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "components/Loader";
import { NotFound } from "components/NotFound";
import { NAVIGATION, REQUIRE_AUTH_NAVIGATION } from "constants/navigation";
import { ROUTES } from "constants/routes";
import { RequireAuth } from "layouts/RequireAuth";

import { RouterItem } from "./types";

const { notFound } = ROUTES;

const renderRoutes = (routes: RouterItem[]) => {
  return routes.map((item) => {
    const { path, element } = item;

    return <Route element={element} key={path} path={path} />;
  });
};

export const PublicRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {renderRoutes(Object.values(NAVIGATION))}

        <Route element={<NotFound />} path={notFound} />
      </Routes>
    </Suspense>
  );
};

export const RequireAuthRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<RequireAuth />}>
          {renderRoutes(Object.values(REQUIRE_AUTH_NAVIGATION))}
        </Route>

        <Route element={<NotFound />} path={notFound} />
      </Routes>
    </Suspense>
  );
};
