/* 
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
si el regalo tiene un _ antes de la palabra quiere decir que está tachado y no se tiene que contar.
*/

export const letter = 'bici coche balón _playstation bici coche peluche'

export const letterTransform = (letter: string) => {
  const gifts = letter
    .split(' ')
    .filter((gift) => gift !== '' && !gift.includes('_'))

  const objectConverted = gifts.map((value, i, array) => ({
    [value]: array.filter((str) => str === value).length,
  }))

  const result = Object.assign({}, ...objectConverted)

  return result
}
