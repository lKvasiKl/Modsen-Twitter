import styled, { DefaultTheme } from "styled-components";

import { InputWrapper } from "components/Input/styled";
import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;

export const SelectContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
`;

export const SelectWrapper = styled(InputWrapper)`
  width: initial;
`;

export const BdaySelector = styled.select`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightS};
  cursor: pointer;
  width: 125px;
  border: none;
`;

export const BdayMonthSelector = styled(BdaySelector)`
  width: 276px;
`;
