import styled, { DefaultTheme, css } from "styled-components";

import { Icon } from "constants/styles/global";
import {
  baseText,
  contentCenter,
  displayFlex,
  flexColumn,
} from "constants/styles/mixins";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const fontSizeXL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xl;
const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

const commonLinkStyles = css`
  color: ${twitterBlueColor};

  &:hover {
    text-decoration: underline;
  }
`;

export const Main = styled.main`
  ${displayFlex}
  ${contentCenter}
  
  min-height: 100%;
`;

export const Form = styled.form`
  ${flexColumn}
  ${contentCenter}

  gap: ${spaceM}px;
  padding: ${spaceM}px;
  width: fit-content;
  max-width: 100%;

  a {
    ${commonLinkStyles}
  }
`;

export const LogoIcon = styled(Icon)`
  align-self: flex-start;
`;

export const Title = styled.h1`
  ${baseText}

  font-size: ${fontSizeXL}px;
  font-family: ${fontFamilyRobotoSerif};
  font-weight: ${fontWeightL};
  align-self: flex-start;
`;

export const TextWithLink = styled.p`
  ${baseText}

  font-family: ${fontFamilyRobotoSerif};

  a {
    ${commonLinkStyles}
  }
`;
