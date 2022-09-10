import { describe, it, expect } from 'vitest';
import { filteredSheeps, sheeps } from '../../src/adventjs/challenge01';

describe('adventjs challege #01', () => {
  it.skip('should return a list of red sheep', () => {
    expect(filteredSheeps(sheeps)).toEqual([
      { name: 'Euge', color: 'rojo' },
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
      { name: 'AAAAAaaaaa', color: 'rojo' },
      { name: 'Nnnnnnnn', color: 'rojo' },
    ]);
  });

  it('should return sheeps with correct letters in theirs name', () => {
    expect(filteredSheeps(sheeps)).toEqual([
      { name: 'Navidad', color: 'rojo' },
      { name: 'Ki Na Ma', color: 'rojo' },
    ]);
  });
});
