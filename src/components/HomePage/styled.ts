import styled, { DefaultTheme, css } from "styled-components";
import { Link } from "react-router-dom";

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
const spaceXS = ({ theme }: DefaultTheme) => theme.spaces.xs;
const fontWeightXL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.xl;
const fontSizeL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const lightGray = ({ theme }: DefaultTheme) => theme.colors.lightGray;
const opacityTwitterBlue = ({ theme }: DefaultTheme) =>
  theme.colors.opacityTwitterBlue;
const mediaTablet = ({ theme }: DefaultTheme) => theme.media.tablet;
const mediaMobile = ({ theme }: DefaultTheme) => theme.media.mobile;

const commonButtonStyles = css`
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

export const HomePageWrapper = styled(Container)`
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  ${displayFlex}
  ${contentCenter}

  gap: ${spaceXL}px;
  width: 100%;
  height: 100vh;
`;

export const Banner = styled.img`
  object-fit: cover;
  user-select: none;
  min-height: 100%;
  width: 50%;

  @media (max-width: ${mediaTablet}px) {
    display: none;
  }
`;

export const Form = styled.form`
  ${flexColumn}

  gap: ${spaceL}px;
  padding: ${spaceM}px;
  width: 100%;
  min-height: 100%;
  justify-content: center;

  @media (max-width: ${mediaTablet}px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${baseText}

  font-weight: ${fontWeightXL};
  font-size: 84px;

  @media (max-width: ${mediaMobile}px) {
    text-align: center;
    font-size: 56px;
  }
`;

export const Subtitle = styled.h2`
  ${baseText}

  font-weight: ${fontWeightXL};
  font-size: 42px;

  @media (max-width: ${mediaMobile}px) {
    font-size: 21px;
  }
`;

export const ButtonsWrapper = styled(Container)`
  gap: ${spaceM}px;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 400px;
`;

export const SignUpButton = styled(Button)`
  ${commonButtonStyles}
`;

export const SignUpLinkButton = styled(Link)`
  ${flexColumn}
  ${contentCenter}
  ${baseText}
  ${commonButtonStyles}
`;

export const Footer = styled.footer`
  ${flexColumn}
  ${contentCenter}
  
  gap: ${spaceS}px;
  padding: ${spaceS}px;

  @media (max-width: ${mediaMobile}px) {
    gap: ${spaceXS}px;
  }
`;
