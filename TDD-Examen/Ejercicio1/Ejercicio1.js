

export const Ejercicio1 = (number) => {
    if (typeof number !== 'number') throw new Error('paramater provided must be a number')
    if (Number.isNaN(number)) throw new Error('paramater provided must be a number')
  
    const multiplies = { 2: 'Aridane', 3: 'Cabrera', 11: 'Ramirez' }
    let output = ''
    Object
      .entries(multiplies)
      .forEach(([multiplier, word]) => {
        if (number % multiplier === 0) output += word
      })
    return output === '' ? number:output
  }