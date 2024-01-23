import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

import { baseText, contentCenter, displayFlex, flexColumn } from "./mixins";

const backgroundColor = ({ theme }: DefaultTheme) => theme.backgroundColor;
const fontWeightS = ({ theme }: DefaultTheme) => theme.fonts.fontWeight.s;
const fontSizeM = ({ theme }: DefaultTheme) => theme.fonts.fontSize.m;

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
    
    #root {
      height: 100vh;
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
  background: transparent;
`;

export const BaseInput = styled.input`
  ${baseText}

  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightS};
  width: 100%;
  border: none;
  background: transparent;
`;
