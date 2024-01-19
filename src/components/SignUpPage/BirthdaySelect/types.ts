import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface BirthdaySelectProps {
  onChange: ({ name, value }: { name: string; value: string | number }) => void;
  error?: string;
  register: UseFormRegister<FieldValues>;
}

export type SelectorChangeEvent = ChangeEvent<HTMLSelectElement>;

export enum MONTH {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11,
}

const MONTH_STRING_MAP: { [key: number]: string } = {};
Object.keys(MONTH).forEach((key) => {
  const value = MONTH[key as keyof typeof MONTH];
  MONTH_STRING_MAP[value] = key;
});
