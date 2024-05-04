import { expect } from '@jest/globals';

import { capitalizeFirstLetter } from './capitalizeFirstLetter';

describe('capitalizeFirstLetter function', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('should return an empty string if input is empty', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('should handle strings with only one character', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
    expect(capitalizeFirstLetter('z')).toBe('Z');
  });
});
