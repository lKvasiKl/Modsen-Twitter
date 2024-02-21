import { useState } from "react";

import { getBirthYears, getDaysInMonth } from "utils/dateData";

import {
  BIRTHDAY_DAY_NAME,
  BIRTHDAY_MONTH_NAME,
  BIRTHDAY_YEAR_NAME,
} from "../types";
import { BirthdaySelectProps, MONTH, SelectorChangeEvent } from "./types";

import { BdaySelector, SelectContainer, SelectWrapper } from "./styled";

const CURRENT_YEAR = new Date().getFullYear();

export const BirthdaySelect = ({
  onChange,
  error,
  register,
}: BirthdaySelectProps) => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);

  const isError = Boolean(error);

  const handleSelectChange = (event: SelectorChangeEvent, type: string) => {
    const selectedValue = event.target.value;
    const numericValue =
      type === BIRTHDAY_MONTH_NAME
        ? MONTH[selectedValue as keyof typeof MONTH]
        : Number(selectedValue);

    if (type === BIRTHDAY_MONTH_NAME) {
      setSelectedMonth(numericValue);
    } else if (type === BIRTHDAY_YEAR_NAME) {
      setSelectedYear(numericValue);
    }

    onChange({ name: type, value: numericValue });
  };

  const MONTH_OPTIONS = Object.values(MONTH)
    .filter((month) => isNaN(Number(month)))
    .map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    ));

  const DAY_OPTIONS = getDaysInMonth(selectedMonth, selectedYear).map((day) => (
    <option key={day} value={day}>
      {day}
    </option>
  ));

  const YEAR_OPTIONS = getBirthYears().map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  return (
    <SelectContainer>
      <SelectWrapper $isError={isError}>
        <BdaySelector
          defaultValue=''
          {...register(BIRTHDAY_MONTH_NAME, {
            onChange: (event) => handleSelectChange(event, BIRTHDAY_MONTH_NAME),
          })}
        >
          <option value='' disabled hidden>
            Month
          </option>
          {MONTH_OPTIONS}
        </BdaySelector>
      </SelectWrapper>
      <SelectWrapper $isError={isError}>
        <BdaySelector
          defaultValue=''
          {...register(BIRTHDAY_DAY_NAME, {
            onChange: (event) => handleSelectChange(event, BIRTHDAY_DAY_NAME),
          })}
        >
          <option value='' disabled hidden>
            Day
          </option>
          {DAY_OPTIONS}
        </BdaySelector>
      </SelectWrapper>
      <SelectWrapper $isError={isError}>
        <BdaySelector
          defaultValue=''
          {...register(BIRTHDAY_YEAR_NAME, {
            onChange: (event) => handleSelectChange(event, BIRTHDAY_YEAR_NAME),
          })}
        >
          <option value='' disabled hidden>
            Year
          </option>
          {YEAR_OPTIONS}
        </BdaySelector>
      </SelectWrapper>
    </SelectContainer>
  );
};
