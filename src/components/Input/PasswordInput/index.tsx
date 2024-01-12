import { useState } from "react";

import EyeIcon from "assets/eye.svg?react";
import EyeSlashIcon from "assets/eyeSlash.svg?react";
import { BaseInput } from "constants/styles/global";

import { PasswordInputProps, PasswordPostfixProps } from "./types";

import { Label } from "../styled";

import { PasswordInputWrapper } from "./styled";

const PasswordPostfix = ({ isVisible, onClick }: PasswordPostfixProps) =>
  isVisible ? (
    <EyeIcon onClick={onClick} />
  ) : (
    <EyeSlashIcon onClick={onClick} />
  );

export const PasswordInput = ({
  name,
  label,
  placeholder,
  onChange,
}: PasswordInputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleEyeIconClick = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <PasswordInputWrapper>
      <BaseInput
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Label>{label}</Label>
      <PasswordPostfix
        isVisible={isPasswordVisible}
        onClick={handleEyeIconClick}
      />
    </PasswordInputWrapper>
  );
};
