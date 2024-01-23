import styled, { DefaultTheme } from "styled-components";

import { InputWrapper } from "components/Input/styled";
import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const spaceXS = ({ theme }: DefaultTheme) => theme.spaces.xs;
const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;
const mediaMobile = ({ theme }: DefaultTheme) => theme.media.mobile;

export const SelectContainer = styled(Container)`
  gap: ${spaceXS}px;
  width: 100%;

  @media (max-width: ${mediaMobile}px) {
    flex-direction: column;
  }
`;

export const SelectWrapper = styled(InputWrapper)`
  width: 100%;
`;

export const BdaySelector = styled.select`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightS};
  cursor: pointer;
  width: 100%;
  border: none;
`;
