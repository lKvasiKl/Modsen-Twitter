import React from "react";

import { ButtonProps } from "./types";

import { ButtonWrapper } from "./styled";

export const Button = React.memo(({ title, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
});
