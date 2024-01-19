import styled, { DefaultTheme } from "styled-components";

import { Button } from "constants/styles/global";

const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const darkTwitterBlueColor = ({ theme }: DefaultTheme) =>
  theme.colors.darkTwitterBlue;
const lightGrayColor = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

export const ButtonWrapper = styled(Button)`
  margin: ${spaceS}px 0;
  font-size: ${fontSizeM}px;
  font-family: ${fontFamilyRobotoSerif};
  background-color: ${twitterBlueColor};
  font-weight: ${fontWeightL};
  color: ${whiteColor};
  border-radius: 76px;
  height: 60px;
  width: 100%;

  &:hover {
    background-color: ${darkTwitterBlueColor};
  }

  &:disabled {
    background-color: ${lightGrayColor};
  }
`;
