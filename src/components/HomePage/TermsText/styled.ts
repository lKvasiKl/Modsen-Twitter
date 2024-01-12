import styled, { DefaultTheme } from "styled-components";

import { Container } from "constants/styles/global";
import { baseText } from "constants/styles/mixins";

const spaceS = ({ theme }: DefaultTheme) => theme.spaces.s;
const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;
const fontSizeXS = ({ theme }: DefaultTheme) => theme.fonts.fontSize.xs;
const twitterBlueColor = ({ theme }: DefaultTheme) => theme.colors.twitterBlue;

export const TermsWrapper = styled(Container)`
  gap: ${spaceS}px;
  width: 100%;
  max-width: 375px;
  flex-direction: column;
  align-items: flex-start;
`;

export const TermsContent = styled.p`
  ${baseText}

  font-size: ${fontSizeXS}px;
  font-weight: ${fontWeightS};

  a {
    color: ${twitterBlueColor};

    &:hover {
      text-decoration: underline;
    }
  }
`;
