/* 
Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que,
además, no vayan vacíos.¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis
que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

// Correct
const letterCorrect1 = 'bici coche (balón) bici coche peluche'
const letterCorrect2 = '(muñeca) consola bici'

// Incorrect
const letterIncorrect1 = 'bici coche (balón bici coche'
const letterIncorrect2 = 'peluche (bici [coche) bici coche balón'
const letterIncorrect3 = '(peluche {) bici'
const letterIncorrect4 = '() bici'
const letterIncorrect5 = '(())'
const letterIncorrect6 = '(a() bici (a)'
const letterIncorrect7 = ')bici( casa play'

const isValid = (letter: string) => {
  const getFirstSplited = letter.split(')')[0]
  const getOtherSplited = letter.split('(')[0]

  if (letter.includes('{') || letter.includes('[')) return false
  if (
    getFirstSplited === '(' ||
    getFirstSplited.endsWith('(') ||
    getOtherSplited.startsWith(')') ||
    letter.includes('((')
  )
    return false
  if (letter.includes('(') && letter.includes(')')) return true

  return false
}