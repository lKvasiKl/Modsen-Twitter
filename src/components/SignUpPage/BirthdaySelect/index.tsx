import { useState } from "react";

import { getBirthYears, getDaysInMonth } from "utils/dateData";

import {
  BIRTHDAY_DAY_NAME,
  BIRTHDAY_MONTH_NAME,
  BIRTHDAY_YEAR_NAME,
} from "../types";
import { BirthdaySelectProps, MONTH, SelectorChangeEvent } from "./types";

import {
  BdaySelector,
  BdayMonthSelector,
  SelectContainer,
  SelectWrapper,
} from "./styled";

const CURRENT_YEAR = new Date().getFullYear();

export const BirthdaySelect = ({ onChange }: BirthdaySelectProps) => {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(CURRENT_YEAR);

  const handleMonthChange = (event: SelectorChangeEvent) => {
    const selectedValue = event.target.value;
    const numericMonthValue = MONTH[selectedValue as keyof typeof MONTH];

    setSelectedMonth(numericMonthValue);
    onChange({ name: BIRTHDAY_MONTH_NAME, value: numericMonthValue });
  };

  const handleDayChange = (event: SelectorChangeEvent) => {
    const selectedValue = event.target.value;
    const numericDayValue = Number(selectedValue);

    onChange({ name: BIRTHDAY_DAY_NAME, value: numericDayValue });
  };

  const handleYearChange = (event: SelectorChangeEvent) => {
    const selectedValue = event.target.value;
    const numericYearValue = Number(selectedValue);

    setSelectedYear(numericYearValue);
    onChange({ name: BIRTHDAY_YEAR_NAME, value: numericYearValue });
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
      <SelectWrapper>
        <BdayMonthSelector
          name={BIRTHDAY_MONTH_NAME}
          onChange={handleMonthChange}
          defaultValue=''
        >
          <option value='' disabled hidden>
            Month
          </option>
          {MONTH_OPTIONS}
        </BdayMonthSelector>
      </SelectWrapper>
      <SelectWrapper>
        <BdaySelector
          name={BIRTHDAY_DAY_NAME}
          onChange={handleDayChange}
          defaultValue=''
        >
          <option value='' disabled hidden>
            Day
          </option>
          {DAY_OPTIONS}
        </BdaySelector>
      </SelectWrapper>
      <SelectWrapper>
        <BdaySelector
          name={BIRTHDAY_YEAR_NAME}
          onChange={handleYearChange}
          defaultValue=''
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
