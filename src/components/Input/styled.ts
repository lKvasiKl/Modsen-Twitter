import styled, { DefaultTheme } from "styled-components";

import { baseText } from "constants/styles/mixins";

import { IsErrorProp } from "./types";

const backgroundColor = ({ theme }: DefaultTheme) => theme.backgroundColor;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const lightGrayColor = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const redColor = ({ theme }: DefaultTheme) => theme.colors.red;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

export const InputWrapper = styled.div<IsErrorProp>`
  padding: ${spaceS}px;
  border: 1px solid ${({ $isError }) => ($isError ? redColor : lightGrayColor)};
  position: relative;
  border-radius: 6px;
  width: 670px;
  max-width: 100%;
  align-self: flex-start;
`;

export const Label = styled.label<IsErrorProp>`
  ${baseText}

  color: ${({ $isError }) => ($isError ? redColor : "default")};
  font-size: ${fontSizeM}px;
  font-family: ${fontFamilyRobotoSerif};
  background-color: ${backgroundColor};
  left: 12px;
  position: absolute;
  padding: 0 4px;
  transform: translateY(50%);
  top: -40%;
`;
