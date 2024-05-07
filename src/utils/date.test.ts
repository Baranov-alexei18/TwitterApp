import { expect } from '@jest/globals';
import { Timestamp } from 'firebase/firestore';

import { convertToTimestamp, formatDate, formatTimestampToDate } from './date';

describe('formatTimestampToDate', () => {
  test('should return a valid Date object', () => {
    const timestamp = { seconds: 1617191999, nanoseconds: 1 };
    const date = formatTimestampToDate(timestamp);
    expect(date instanceof Date).toBe(true);
  });

  test('should return null if timestamp is invalid', () => {
    const invalidTimestamp = { seconds: NaN, nanoseconds: 1 };
    const result = formatTimestampToDate(invalidTimestamp);
    expect(result).toBeNull();
  });
});

describe('convertToTimestamp', () => {
  test('should return a valid Timestamp object', () => {
    const year = 2023;
    const month = 5;
    const day = 14;
    const timestamp = convertToTimestamp(year, month, day);
    expect(timestamp instanceof Timestamp).toBe(true);
  });
});

describe('formatDate', () => {
  test('should return a formatted date string', () => {
    const date = new Date('2024-05-04');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('4 May 2024');
  });
});
