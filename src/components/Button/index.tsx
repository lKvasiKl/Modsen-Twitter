import React from "react";

import { ButtonProps } from "./types";

import { ButtonWrapper } from "./styled";

export const Button = React.memo(({ title, onClick, isValid }: ButtonProps) => {
  return (
    <ButtonWrapper disabled={!isValid} onClick={onClick}>
      {title}
    </ButtonWrapper>
  );
});
