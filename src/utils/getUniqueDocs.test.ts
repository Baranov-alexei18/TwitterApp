import { expect } from '@jest/globals';

import { getUniqueDocs } from './getUniqueDocs';

describe('getUniqueDocs', () => {
  const mockData1 = { id: '1', name: 'Doc 1' };
  const mockData2 = { id: '2', name: 'Doc 2' };
  const mockData3 = { id: '3', name: 'Doc 3' };
  const mockData4 = { id: '1', name: 'Doc 4' };

  test('should return an empty array if no arguments are provided', () => {
    const result = getUniqueDocs('id');
    expect(result).toEqual([]);
  });

  test('should return unique documents based on the specified property', () => {
    const result = getUniqueDocs('id', mockData1, mockData2, mockData1);
    expect(result).toEqual([mockData1, mockData2]);
  });

  test('should handle edge case when no unique documents are found', () => {
    const result = getUniqueDocs('id', mockData1, mockData1, mockData1);
    expect(result).toEqual([mockData1]);

    const result1 = getUniqueDocs('id', mockData1, mockData2, mockData4);
    expect(result1).toEqual([mockData4, mockData2]);
  });

  test('should handle edge case when only one document is provided', () => {
    const result = getUniqueDocs('id', mockData1);
    expect(result).toEqual([mockData1]);
  });

  test('should handle edge case when no property value is found', () => {
    const result = getUniqueDocs('nonexistent', mockData1, mockData2, mockData3);
    expect(result).toEqual([]);
  });
});
