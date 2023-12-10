import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

import { contentCenter, displayFlex } from "./mixins";

const backgroundColor = ({ theme }: DefaultTheme) => theme.backgroundColor;

export const GlobalStyle = createGlobalStyle`
    * {
        background-color: ${backgroundColor};
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
        list-style: none;
        outline: none;
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
  ${displayFlex}
  ${contentCenter}
  
  cursor: default;
`;
