import styled, { DefaultTheme, keyframes } from "styled-components";

import { Button, Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const animate = keyframes`
  100% {
    transform: translateY(20px);
  }
`;

const spaceXS = ({ theme }: DefaultTheme) => theme.spaces.xs;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const spaceL = ({ theme }: DefaultTheme) => theme.spaces.l;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;
const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const darkTwitterBlueColor = ({ theme }: DefaultTheme) =>
  theme.colors.darkTwitterBlue;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const fontFamilyRobotoSerif = ({ theme }: DefaultTheme) =>
  theme.fonts.fontFamily.robotoSerif;

export const NotFoundWrapper = styled(Container)`
  min-height: 100%;

  svg {
    margin: ${spaceS}px;

    #Polygon-1,
    #Polygon-2,
    #Polygon-3,
    #Polygon-4,
    #Polygon-4,
    #Polygon-5 {
      animation: ${animate} 1s infinite ease-in-out alternate;
    }
    #Polygon-2 {
      animation-delay: 0.2s;
    }
    #Polygon-3 {
      animation-delay: 0.4s;
    }
    #Polygon-4 {
      animation-delay: 0.6s;
    }
    #Polygon-5 {
      animation-delay: 0.8s;
    }
  }
`;

export const NotFoundInfo = styled(Container)`
  margin: ${spaceL}px;
  gap: ${spaceL}px;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${baseText}

  font-weight: ${fontWeightL};
  font-size: 60px;
`;

export const Text = styled.p`
  ${baseText}
`;

export const GoBackButton = styled(Button)`
  font-size: ${fontSizeM}px;
  font-family: ${fontFamilyRobotoSerif};
  background-color: ${twitterBlueColor};
  font-weight: ${fontWeightL};
  color: ${whiteColor};
  border-radius: ${spaceXS}px;
  height: 40px;
  width: 100%;

  &:hover {
    background-color: ${darkTwitterBlueColor};
  }
`;
