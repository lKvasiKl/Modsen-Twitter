import * as Yup from "yup";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const EMAIL_OR_PHONE_VALIDATION_SCHEMA = Yup.string()
  .required("Phone or email is required")
  .test("is-email-or-phone", "Enter a valid email or phone number", (value) => {
    return (
      Yup.string().matches(EMAIL_REGEX).isValidSync(value) ||
      Yup.string().matches(PHONE_REGEX).isValidSync(value)
    );
  });

const PASSWORD_VALIDATION_SCHEMA = Yup.string()
  .required("Password is required")
  .min(6, "Password should contain at least 6 characters");

export const LOGIN_FORM_SCHEMA = Yup.object().shape({
  emailOrPhone: EMAIL_OR_PHONE_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
});
