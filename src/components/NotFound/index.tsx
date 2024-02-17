import React, { useCallback } from "react";

import Pentagons from "assets/NotFound.svg?react";

import {
  GoBackButton,
  NotFoundInfo,
  NotFoundWrapper,
  Text,
  Title,
} from "./styled";

export const NotFound = React.memo(() => {
  const handleButtonClick = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <NotFoundWrapper>
      <Pentagons />
      <NotFoundInfo>
        <Title>404</Title>
        <Text>Page not found</Text>
        <GoBackButton onClick={handleButtonClick}>Go back</GoBackButton>
      </NotFoundInfo>
    </NotFoundWrapper>
  );
});
