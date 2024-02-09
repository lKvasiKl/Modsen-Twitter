import { MIN_USER_AGE, MIN_YEAR, ONE_MONTH, START_DAY } from "constants/date";

const CURRENT_YEAR = new Date().getFullYear();

export const getDaysInMonth = (month: number, year: number): number[] => {
  const totalDaysInMonth = new Date(
    year,
    month + ONE_MONTH,
    START_DAY,
  ).getDate();

  return Array.from({ length: totalDaysInMonth }, (_, i) => i + 1);
};

export const getBirthYears = (): number[] => {
  return Array.from(
    { length: CURRENT_YEAR - MIN_YEAR },
    (_, i) => CURRENT_YEAR - i - MIN_USER_AGE,
  );
};
