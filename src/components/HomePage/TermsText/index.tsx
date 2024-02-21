import React from "react";
import { Link } from "react-router-dom";

import { ADDITIONAL_NAVIGATION } from "constants/navigation";
import { ROUTES } from "constants/routes";

import { TermsWrapper, TermsContent } from "./styled";

const { Terms, Privacy, Cookie } = ADDITIONAL_NAVIGATION;

const { login } = ROUTES;

export const TermsText = React.memo(() => {
  return (
    <TermsWrapper>
      <TermsContent>
        By signing up you agree to the <Link to={Terms.path}>{Terms.name}</Link>{" "}
        and <Link to={Privacy.path}>{Privacy.name}</Link>, including{" "}
        <Link to={Cookie.path}>{Cookie.name}</Link>.
      </TermsContent>

      <TermsContent>
        Already have an account? <Link to={login}>Log in</Link>
      </TermsContent>
    </TermsWrapper>
  );
});
