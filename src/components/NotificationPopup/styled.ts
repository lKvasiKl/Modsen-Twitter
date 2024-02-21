import styled, { DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;
const whiteColor = ({ theme }: DefaultTheme) => theme.colors.white;
const spaceXS = ({ theme }: DefaultTheme) => theme.spaces.xs;
const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;

export const Popup = styled(Container)`
  ${baseText}

  background-color: ${twitterBlueColor};
  color: ${whiteColor};
  border-radius: ${spaceXS}px;
  padding: ${spaceS}px;
  display: unset;
  word-wrap: break-word;
  position: fixed;
  max-width: 250px;
  width: fit-content;
  bottom: 5%;
  right: 5%;
`;
