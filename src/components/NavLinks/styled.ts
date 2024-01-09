import styled, { DefaultTheme } from "styled-components";

import { baseText, displayFlex } from "constants/styles/mixins";

const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const twitterBlue = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const fontSizeXS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xs;
const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;

export const Nav = styled.nav`
  ${displayFlex}
`;

export const Links = styled.ul`
  ${displayFlex}

  gap: ${spaceS}px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const LinkItem = styled.li`
  a {
    ${baseText}

    font-size: ${fontSizeXS}px;
    font-weight: ${fontWeightS};

    &:hover {
      color: ${twitterBlue};
      text-decoration: underline;
    }
  }
`;
