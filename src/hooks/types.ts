import * as Yup from "yup";
import { FieldValues } from "react-hook-form";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { AppRootStateType } from "store/index";

type ValidationSchema = Yup.ObjectSchema<FieldValues>;

export interface UseFormValidationProps {
  validationSchema: ValidationSchema;
  onSubmit: () => void;
}

export type RootDispatchThunkType = ThunkDispatch<
  AppRootStateType,
  any,
  Action
>;
