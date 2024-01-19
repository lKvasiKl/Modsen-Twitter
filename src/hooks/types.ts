import * as Yup from "yup";
import { FieldValues } from "react-hook-form";

type ValidationSchema = Yup.ObjectSchema<FieldValues>;

export interface UseFormValidationProps {
  validationSchema: ValidationSchema;
  onSubmit: () => void;
}
