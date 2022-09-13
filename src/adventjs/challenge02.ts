/* 
Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
si el regalo tiene un _ antes de la palabra quiere decir que está tachado y no se tiene que contar.
*/

const letter = 'bici coche  balón _playstation bici  coche  peluche'

const letterTranform = (letter: string) => {
  const gifts = letter
    .split(' ')
    .filter((gift) => gift !== '' && !gift.includes('_'))

  const objectConverted = gifts.map((name, i, array) => ({
    [name]: array.filter((value) => value === name).length
  }))

  const result = Object.assign({}, ...objectConverted)

  return result
}

console.log(letterTranform(letter))
