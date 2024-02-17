import { useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "constants/styles/global";
import { Input } from "components/Input";
import { PasswordInput } from "components/Input/PasswordInput";
import { Button } from "components/Button";
import { ROUTES } from "constants/routes";
import { useFormValidation } from "hooks/useFormValidation";
import { useAppDispatch } from "hooks/useStore";
import { signUpWithEmailThunk } from "store/thunks/auth";
import { BirthdaySelect } from "./BirthdaySelect";
import { REGISTER_FORM_SCHEMA } from "./validation";

import { ChangeForm } from "./types";

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
  DEFAULT_FORM_STATE,
} from "./config";

import { Form, Main, Subtitle, Text, TextWithLink, Title } from "./styled";

const { login } = ROUTES;

export const SignUpPage = () => {
  const [form, setForm] = useState(DEFAULT_FORM_STATE);
  const dispatch = useAppDispatch();

  const handleChangeForm = ({ name, value }: ChangeForm) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmitForm = async () => {
    await dispatch(signUpWithEmailThunk(form));
    reset();
  };

  const { register, handleSubmit, reset, isValid, getErrorMessage } =
    useFormValidation({
      validationSchema: REGISTER_FORM_SCHEMA,
      onSubmit: handleSubmitForm,
    });

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Icon {...LOGO_ICON_CONFIG} />
        <Title>{TITLE}</Title>
        {INPUTS_PROPS.map(({ type, name, label, placeholder }) => (
          <Input
            key={name}
            name={name}
            label={label}
            type={type}
            placeholder={placeholder}
            onChange={handleChangeForm}
            error={getErrorMessage(name)}
            register={register}
          />
        ))}
        {PASSWORD_INPUTS_PROPS.map(({ name, label, placeholder }) => (
          <PasswordInput
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            onChange={handleChangeForm}
            error={getErrorMessage(name)}
            register={register}
          />
        ))}
        <Subtitle>{SUBTITLE}</Subtitle>
        <Text>{SUBTITL_INFO_TEXT}</Text>
        <BirthdaySelect onChange={handleChangeForm} register={register} />
        <Button isValid={isValid} title={CREATE_ACC_BUTTON} />
        <TextWithLink>
          {ACCOUNT_EXIST_TEXT} <Link to={login}>{LINK_TO_LOGIN_TEXT}</Link>
        </TextWithLink>
      </Form>
    </Main>
  );
};
