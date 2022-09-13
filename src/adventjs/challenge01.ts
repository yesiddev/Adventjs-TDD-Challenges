/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y
que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

interface ISheeps {
  name: string;
  color: string;
}

export const sheeps: ISheeps[] = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

// First Solution
/* const filteredSheeps = (sheeps: ISheeps[]): ISheeps[] => {
  const redSheeps = sheeps.filter(({ color }) => color === 'rojo');
  const correctSheeps = redSheeps.filter(
    ({ name }) =>
      (name.includes('N') && name.includes('a')) ||
      (name.includes('A') && name.includes('n')) ||
      (name.includes('N') && name.includes('A')) ||
      (name.includes('n') && name.includes('a'))
  );
  return correctSheeps;
}; */

// Refactoring Solution
/**
 * It filters the sheeps array by color, then filters the resulting array by name
 * @param {ISheeps[]} sheeps - ISheeps[]
 * @returns An array of objects that have the color red and the name includes the letters n and a.
 */
export const filteredSheeps = (sheeps: ISheeps[]): ISheeps[] => {
  const redSheeps = sheeps.filter(({ color }) => color === 'rojo');
  const correctSheeps = redSheeps.filter(({ name }) => {
    const nameLowerCase = name.toLowerCase();
    return nameLowerCase.includes('n') && nameLowerCase.includes('a');
  });
  return correctSheeps;
};

console.log(filteredSheeps(sheeps));