import styled, { DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const redColor = ({ theme }: DefaultTheme) => theme.colors.red;
const fontSizeL = ({ theme }: DefaultTheme) => theme.fonts.fontSize.l;
const fontWeightL = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.l;

export const ErrorBoundaryContainer = styled(Container)`
  flex-direction: column;
`;

export const Error = styled.p`
  ${baseText}

  color: ${redColor};
`;

export const Text = styled.span`
  ${baseText}

  text-align: center;
`;

export const Title = styled.h1`
  ${baseText}

  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightL};
`;
