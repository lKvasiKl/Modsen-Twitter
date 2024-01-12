import styled, { DefaultTheme } from "styled-components";

import { baseText } from "constants/styles/mixins";

const backgroundColor = ({ theme }: DefaultTheme) => theme.backgroundColor;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const lightGray = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

export const InputWrapper = styled.div`
  padding: ${spaceS}px;
  border: 1px solid ${lightGray};
  position: relative;
  border-radius: 6px;
  width: 670px;
  max-width: 100%;
  align-self: flex-start;
`;

export const Label = styled.label`
  ${baseText}

  left: 12px;
  font-size: ${fontSizeM}px;
  font-family: ${fontFamilyRobotoSerif};
  background-color: ${backgroundColor};
  position: absolute;
  padding: 0 4px;
  transform: translateY(50%);
  top: -40%;
`;
