import React from "react";
import { Link } from "react-router-dom";

import { ADDITIONAL_NAVIGATION } from "constants/navigation";

import { NavigationItem } from "./types";
import { COPIRYTING } from "./config";

import { LinkItem, Links, Nav } from "./styled";

const LINKS: [string, NavigationItem][] = Object.entries(ADDITIONAL_NAVIGATION);

const { copyright } = COPIRYTING;

export const NavLinks = React.memo(() => {
  return (
    <Nav>
      <Links>
        {LINKS.map(([key, { name, path }]) => (
          <LinkItem key={key}>
            <Link to={path}>{name}</Link>
          </LinkItem>
        ))}
        {copyright}
      </Links>
    </Nav>
  );
});
