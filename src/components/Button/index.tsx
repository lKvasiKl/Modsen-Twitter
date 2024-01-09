import React from "react";

import { ButtonProps } from "./types";

import { ButtonWrapper } from "./styled";

export const Button = React.memo(({ title, onButtonClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onButtonClick}>{title}</ButtonWrapper>;
});
