import { expect } from '@jest/globals';

import { maskForPhone } from './maskForPhone';

describe('maskForPhone', () => {
  test('should return formatted phone number with country code', () => {
    const phoneNumber = '+375123456789';
    const result = maskForPhone(phoneNumber, 'by');
    expect(result).toBe('+375 (12) 345-67-89');
  });

  test('should return formatted phone number without country code', () => {
    const phoneNumber = '1234567890';
    const result = maskForPhone(phoneNumber);
    expect(result).toBe('(12) 345-67-89');
  });

  test('should handle empty input', () => {
    const result = maskForPhone('', 'by');
    expect(result).toBe('+375 ');
  });

  test('should handle invalid input', () => {
    const result1 = maskForPhone('+375 (12)df 345sdfsdf-67-89', 'by');
    expect(result1).toBe('+375 (12) 345-67-89');
    const result2 = maskForPhone('+375sdf (12) 345-67-89sdf', 'by');
    expect(result2).toBe('+375 (12) 345-67-89');
  });
});
