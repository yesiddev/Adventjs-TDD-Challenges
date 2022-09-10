import { describe, it, expect } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz';

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });
 
  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz('a' as any)).toThrow();
  })

  it('should to show the correct throw message if not number is provided as parameter', () => {
    expect(() => fizzbuzz('a' as any)).toThrow('parameter is not a number');
  })

  it('should return Fizz if the number is multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
  });

  it('should return Buzz if the number is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
  });

  it('should return FizzBuzz if the number is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
  });

  it('should return the number if the number is not multiple of 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
  });

  it('should return Woff if the number is multiple of 7', () => {
    expect(fizzbuzz(7)).toBe('Woff');
    expect(fizzbuzz(14)).toBe('Woff');
  });

  it("should return FizzWoff if the number is multiple of 3 and 7", () => {
    expect(fizzbuzz(21)).toBe('FizzWoff');
    expect(fizzbuzz(42)).toBe('FizzWoff');
  })
});
