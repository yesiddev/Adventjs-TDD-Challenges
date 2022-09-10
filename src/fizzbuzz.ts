/*
write a function that to set a number:
- if the number is divisible by 3, return "fizz"
- if the number is divisible by 5, return "buzz"
- if the number is divisible by 3 and 5, return "fizzbuzz"
- if the number is divisible by 7 return "woff"
- otherwise, return the number
*/

export const fizzbuzz = (num: number): string | number => {
  if (typeof num !== 'number') throw new Error('parameter is not a number');

  const multiples = { 3: 'Fizz', 5: 'Buzz', 7: 'Woff' };

  let output = '';

  Object.entries(multiples).forEach(([multiplier, word]) => {
    if (num % +multiplier === 0) output += word;
  });

  return output || num;
};

fizzbuzz(3);
