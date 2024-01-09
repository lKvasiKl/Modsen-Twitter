import styled, { DefaultTheme } from "styled-components";

import { Container, Button } from "constants/styles/global";
import {
  baseText,
  contentCenter,
  displayFlex,
  flexColumn,
} from "constants/styles/mixins";

const spaceXL = ({ theme }: DefaultTheme) => theme.spaces.xl;
const spaceL = ({ theme }: DefaultTheme) => theme.spaces.l;
const spaceM = ({ theme }: DefaultTheme) => theme.spaces.m;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const fontWeightXL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.xl;
const fontSizeL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const lightGray = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const opacityTwitterBlue = ({ theme }: DefaultTheme) =>
  theme.colors.opacityTwitterBlue;

export const HomePageWrapper = styled(Container)`
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const Main = styled.main`
  ${displayFlex}
  ${contentCenter}

  gap: ${spaceXL}px;
  height: 100%;
  width: 100%;
`;

export const Banner = styled.img`
  object-fit: cover;
  user-select: none;
  height: 100%;
  width: 50%;
`;

export const Icon = styled.img`
  background: transparent;
`;

export const Form = styled.form`
  ${flexColumn}

  gap: ${spaceL}px;
  width: 100%;
`;

export const Title = styled.h1`
  ${baseText}

  font-weight: ${fontWeightXL};
  font-size: 84px;
`;

export const Subtitle = styled.h2`
  ${baseText}

  font-weight: ${fontWeightXL};
  font-size: 42px;
`;

export const ButtonsWrapper = styled(Container)`
  gap: ${spaceM}px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
`;

export const SignUpButton = styled(Button)`
  gap: ${spaceS}px;
  font-size: ${fontSizeL}px;
  border: 1px solid ${lightGray};
  border-radius: 50px;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  height: 60px;

  &:hover {
    background-color: ${opacityTwitterBlue};
    border: 1px solid ${opacityTwitterBlue};
  }
`;

export const Footer = styled.footer`
  ${flexColumn}
  ${contentCenter}
  
  gap: ${spaceS}px;
  padding: ${spaceS}px;
`;
