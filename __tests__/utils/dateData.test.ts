import { getBirthYears, getDaysInMonth } from "../../src/utils/dateData";
import { MIN_USER_AGE, MIN_YEAR } from "../../src/constants/date";

const CURRENT_YEAR = new Date().getFullYear();
const DAYS_IN_JAN_ARR = Array.from({ length: 31 }, (_, index) => index + 1);
const DAYS_IN_LEAP_FEB_ARR = Array.from(
  { length: 29 },
  (_, index) => index + 1,
);
const DAYS_IN_NON_LEAP_FEB_ARR = Array.from(
  { length: 28 },
  (_, index) => index + 1,
);

describe("getDaysInMonth function", () => {
  it("should return an array with correct number of days for January", () => {
    const daysInJanuary = getDaysInMonth(0, 2022);
    expect(daysInJanuary).toEqual(DAYS_IN_JAN_ARR);
  });

  it("should return an array with correct number of days for February in a leap year", () => {
    const daysInFebruaryLeapYear = getDaysInMonth(1, 2024);
    expect(daysInFebruaryLeapYear).toEqual(DAYS_IN_LEAP_FEB_ARR);
  });

  it("should return an array with correct number of days for February in a non-leap year", () => {
    const daysInFebruaryNonLeapYear = getDaysInMonth(1, 2023);
    expect(daysInFebruaryNonLeapYear).toEqual(DAYS_IN_NON_LEAP_FEB_ARR);
  });
});

describe("getBirthYears function", () => {
  it("should return an array with correct range of birth years", () => {
    const birthYears = getBirthYears();
    const expectedRange = CURRENT_YEAR - MIN_YEAR;

    expect(birthYears).toHaveLength(expectedRange);

    birthYears.forEach((year, index) => {
      const expectedYear = CURRENT_YEAR - index - MIN_USER_AGE;
      expect(year).toEqual(expectedYear);
    });
  });
});
