import { useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "hooks/useStore";
import { useFormValidation } from "hooks/useFormValidation";
import { ChangeForm } from "components/SignUpPage/types";
import { PasswordInput } from "components/Input/PasswordInput";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { ROUTES } from "constants/routes";
import { LOGIN_FORM_SCHEMA } from "./validation";

import {
  DEFAULT_FORM_STATE,
  INPUT_PROPS,
  PASSWORD_INPUT_PROPS,
  LOGO_ICON_CONFIG,
  TITLE,
  LOGIN_BUTTON,
  ACCOUNT_DOESNT_EXIST_TEXT,
  LINK_TO_REGISTER_TEXT,
  LINK_TO_HOME_TEXT,
} from "./config";

import { Form, LogoIcon, Main, TextWithLink, Title } from "./styled";
import { logInWithEmailOrPhoneThunk } from "store/thunks/auth";

const { name, label, type, placeholder } = INPUT_PROPS;
const {
  name: passwordName,
  label: passwordLabel,
  placeholder: passwordPlaceholder,
} = PASSWORD_INPUT_PROPS;
const { sign_up, home } = ROUTES;

export const LogInPage = () => {
  const [form, setForm] = useState(DEFAULT_FORM_STATE);
  const dispatch = useAppDispatch();

  const handleChangeForm = ({ name, value }: ChangeForm) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmitForm = async () => {
    await dispatch(logInWithEmailOrPhoneThunk(form));
    reset();
  };

  const { register, handleSubmit, reset, isValid, getErrorMessage } =
    useFormValidation({
      validationSchema: LOGIN_FORM_SCHEMA,
      onSubmit: handleSubmitForm,
    });

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <LogoIcon {...LOGO_ICON_CONFIG} />
        <Title>{TITLE}</Title>
        <Input
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          onChange={handleChangeForm}
          error={getErrorMessage(name)}
          register={register}
        />
        <PasswordInput
          name={passwordName}
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          onChange={handleChangeForm}
          error={getErrorMessage(passwordName)}
          register={register}
        />
        <Button isValid={isValid} title={LOGIN_BUTTON} />
        <TextWithLink>
          {ACCOUNT_DOESNT_EXIST_TEXT}{" "}
          <Link to={sign_up}>{LINK_TO_REGISTER_TEXT}</Link>
        </TextWithLink>
        <Link to={home}>{LINK_TO_HOME_TEXT}</Link>
      </Form>
    </Main>
  );
};
