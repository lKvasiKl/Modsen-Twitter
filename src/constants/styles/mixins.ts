import { css, DefaultTheme } from "styled-components";

import { FONTS } from "./fonts";

const textColor = ({ theme }: DefaultTheme) => theme.textColor;

export const displayFlex = css`
  display: flex;
`;

export const flexColumn = css`
  ${displayFlex}

  flex-direction: column;
`;

export const contentCenter = css`
  justify-content: center;
  align-items: center;
`;

export const baseText = css`
  color: ${textColor};
  font-size: ${FONTS.fontSize.s}px;
  font-weight: ${FONTS.fontWeight.m};
  font-style: normal;
  line-height: normal;
`;
