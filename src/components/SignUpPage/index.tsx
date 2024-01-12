import { Link } from "react-router-dom";

import { Icon } from "constants/styles/global";
import { Input } from "components/Input";
import { PasswordInput } from "components/Input/PasswordInput";
import { Button } from "components/Button";
import { ROUTES } from "constants/routes";
import { BirthdaySelect } from "./BirthdaySelect";

import {
  ACCOUNT_EXIST_TEXT,
  CREATE_ACC_BUTTON,
  INPUTS_PROPS,
  LINK_TO_LOGIN_TEXT,
  LOGO_ICON_CONFIG,
  PASSWORD_INPUTS_PROPS,
  SUBTITLE,
  SUBTITL_INFO_TEXT,
  TITLE,
} from "./config";

import { Form, Main, Subtitle, Text, TextWithLink, Title } from "./styled";

const { login } = ROUTES;

export const SignUpPage = () => {
  return (
    <Main>
      <Form>
        <Icon {...LOGO_ICON_CONFIG} />
        <Title>{TITLE}</Title>
        {INPUTS_PROPS.map(({ type, name, label, placeholder }) => (
          <Input
            key={name}
            label={label}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={() => {}}
          />
        ))}
        {PASSWORD_INPUTS_PROPS.map(({ name, label, placeholder }) => (
          <PasswordInput
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            onChange={() => {}}
          />
        ))}
        <Subtitle>{SUBTITLE}</Subtitle>
        <Text>{SUBTITL_INFO_TEXT}</Text>
        <BirthdaySelect />
        <Button title={CREATE_ACC_BUTTON} onClick={() => {}} />
        <TextWithLink>
          {ACCOUNT_EXIST_TEXT} <Link to={login}>{LINK_TO_LOGIN_TEXT}</Link>
        </TextWithLink>
      </Form>
    </Main>
  );
};
