export interface PasswordPostfixProps {
  isVisible: boolean;
  onClick: () => void;
}

export interface PasswordInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange: () => void;
}
