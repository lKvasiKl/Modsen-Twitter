import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { NAVIGATION, REQUIRE_AUTH_NAVIGATION } from "constants/navigation";
import { ROUTES } from "constants/routes";
import { RequireAuth } from "layouts/RequireAuth";

import { RouterItem } from "./types";

const renderRoutes = (routes: RouterItem[]) => {
  return routes.map((item) => {
    const { path, element } = item;

    return <Route element={element} key={path} path={path} />;
  });
};

//TODO: FALLBACK + NOT FOUND
export const Router = () => {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        {renderRoutes(Object.values(NAVIGATION))}

        <Route element={<RequireAuth />}>
          {renderRoutes(Object.values(REQUIRE_AUTH_NAVIGATION))}
        </Route>

        <Route element={<div>NOT FOUND</div>} path={ROUTES.notFound} />
      </Routes>
    </Suspense>
  );
};
