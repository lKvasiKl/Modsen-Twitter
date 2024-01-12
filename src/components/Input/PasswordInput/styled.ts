import styled, { DefaultTheme } from "styled-components";

import { InputWrapper } from "../styled";

const textColor = ({ theme }: DefaultTheme) => theme.textColor;
const spaceXS = ({ theme }: DefaultTheme) => theme.spaces.xs;

export const PasswordInputWrapper = styled(InputWrapper)`
  gap: ${spaceXS}px;
  display: flex;
  position: relative;

  svg {
    background-color: transparent;
    width: 22px;
    height: 22px;
    cursor: pointer;

    path {
      stroke: ${textColor};
    }
  }
`;
