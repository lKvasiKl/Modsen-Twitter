import * as Yup from "yup";

const NAME_REGEX = /^[\p{L}]+$/u;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const NAME_VALIDATION_SCHEMA = Yup.string()
  .required("Name is required")
  .matches(NAME_REGEX, "Invalid Name")
  .min(3, "Should contain at least 3 characters");

const EMAIL_VALIDATION_SCHEMA = Yup.string()
  .required("Email is required")
  .matches(EMAIL_REGEX, "Email format is not valid");

const PHONE_VALIDATION_SCHEMA = Yup.string()
  .required("Phone is required")
  .matches(PHONE_REGEX, "Phone format is not valid");

const PASSWORD_VALIDATION_SCHEMA = Yup.string()
  .required("Password is required")
  .min(6, "Password should contain at least 6 characters");

const CONFIRM_PASSWORD_VALIDATION_SCHEMA = Yup.string()
  .required("Please confirm password")
  .oneOf([Yup.ref("password")], "Passwords does not match");

const MONTH_VALIDATION_SCHEMA = Yup.string().required("Month is required");
const DAY_VALIDATION_SCHEMA = Yup.string().required("Day is required");
const YEAR_VALIDATION_SCHEMA = Yup.string().required("Year is required");

export const REGISTER_FORM_SCHEMA = Yup.object().shape({
  name: NAME_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
  phone: PHONE_VALIDATION_SCHEMA,
  password: PASSWORD_VALIDATION_SCHEMA,
  confirmPassword: CONFIRM_PASSWORD_VALIDATION_SCHEMA,
  birthdayMonth: MONTH_VALIDATION_SCHEMA,
  birthdayDay: DAY_VALIDATION_SCHEMA,
  birthdayYear: YEAR_VALIDATION_SCHEMA,
});
