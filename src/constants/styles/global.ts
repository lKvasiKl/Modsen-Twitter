import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

import { baseText, contentCenter, displayFlex, flexColumn } from "./mixins";

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

export const Button = styled.button`
  ${flexColumn}
  ${contentCenter}
  ${baseText}
  
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;
