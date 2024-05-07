import { expect } from '@jest/globals';

import { getDays, getMonths, getYears } from './getDate';

describe('Date Helper Functions', () => {
  describe('getYears', () => {
    it('returns an array of options with years from the current year to 100 years ago', () => {
      const currentYear = new Date().getFullYear();
      const years = getYears();
      const expectedYears = [];

      for (let i = currentYear; i >= currentYear - 100; i -= 1) {
        expectedYears.push({ value: i, label: i.toString() });
      }

      expect(years).toEqual(expectedYears);
    });
  });

  describe('getMonths', () => {
    it('returns an array of options with months from January to the current month if the current year is provided', () => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const months = getMonths(currentYear);
      const expectedMonths = [];

      for (let i = 0; i <= currentMonth; i += 1) {
        const month = new Date(0, i);
        expectedMonths.push({ value: i, label: month.toLocaleString('default', { month: 'long' }) });
      }

      expect(months).toEqual(expectedMonths);
    });

    it('returns an array of options with all months', () => {
      const currentYear = 2023;
      const months = getMonths(currentYear);
      const expectedMonths = [];

      for (let i = 0; i <= 11; i += 1) {
        const month = new Date(0, i);
        expectedMonths.push({ value: i, label: month.toLocaleString('default', { month: 'long' }) });
      }

      expect(months).toEqual(expectedMonths);
    });
  });

  describe('getDays', () => {
    it('returns an array of options with days from 1 to the last day of the provided month and year', () => {
      const year = 2022;
      const month = 1;
      const days = getDays(year, month);
      const expectedDays = [];

      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let i = 1; i <= daysInMonth; i += 1) {
        expectedDays.push({ value: i, label: i.toString() });
      }

      expect(days).toEqual(expectedDays);
    });

    it('returns an array of options with days from 1 to the last day of the current month and year', () => {
      const days = getDays();
      const expectedDays = [];

      const currentDay = new Date().getDate();

      for (let i = 1; i <= currentDay; i += 1) {
        expectedDays.push({ value: i, label: i.toString() });
      }

      expect(days).toEqual(expectedDays);
    });
  });
});
