import styled, { DefaultTheme } from "styled-components";

import {
  baseText,
  contentCenter,
  displayFlex,
  flexColumn,
} from "constants/styles/mixins";

const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const fontSizeXL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xl;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

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
`;

export const Title = styled.h1`
  ${baseText}

  font-size: ${fontSizeXL}px;
  font-family: ${fontFamilyRobotoSerif};
  font-weight: ${fontWeightL};
  align-self: flex-start;
`;

export const Subtitle = styled.h3`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-family: ${fontFamilyRobotoSerif};
  font-weight: ${fontWeightL};
  align-self: flex-start;
`;

export const Text = styled.p`
  ${baseText}

  width: 670px;
  max-width: 100%;
`;

export const TextWithLink = styled.p`
  ${baseText}

  font-family: ${fontFamilyRobotoSerif};

  a {
    color: ${twitterBlueColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;
