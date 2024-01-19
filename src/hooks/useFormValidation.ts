import { FieldErrors, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { UseFormValidationProps } from "./types";

export const useFormValidation = ({
  validationSchema,
  onSubmit,
}: UseFormValidationProps) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const getErrorMessage = (fieldName: string): string | undefined =>
    errors[fieldName as keyof FieldErrors<{}>]?.message;

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    isValid,
    getErrorMessage,
  };
};
