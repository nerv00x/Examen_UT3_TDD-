


import { describe, expect, it } from 'vitest'
import { Ejercicio1 } from './Ejercicio1'

describe('Ejercicio1', ()  => {
 
  it('Should throw if not number is provided as parameter', () => {
    expect(() => Ejercicio1()).toThrow()
  })
  it('Should throw a specific error message if not number is provided as parameter', () => {
    expect(() => Ejercicio1()).toThrow('paramater provided must be a number')
  })
  it('Should throw a specific error message  if not number is provided', () => {
    expect(() => Ejercicio1(NaN)).toThrow('paramater provided must be a number')
  })
  it('should return 1 if number provided is 1', () => {
    expect(Ejercicio1(1)).toBe(1)
  })
  it('should return Aridane if number provided is multiple of 2', () => {
    expect(Ejercicio1(4)).toBe('Aridane')
    expect(Ejercicio1(8)).toBe('Aridane')
    expect(Ejercicio1(10)).toBe('Aridane')
  })
  it('should return Cabrera if number provided is multiple of 3', () => {
    expect(Ejercicio1(9)).toBe('Cabrera')
    expect(Ejercicio1(15)).toBe('Cabrera')
    expect(Ejercicio1(21)).toBe('Cabrera')
  }) 
  it('should return AridaneCabrera if number provided is multiple of 6', () => {
    expect(Ejercicio1(6)).toBe('AridaneCabrera')
    expect(Ejercicio1(12)).toBe('AridaneCabrera')
    expect(Ejercicio1(18)).toBe('AridaneCabrera')
  })
  it('should return 5 if number provided is 5', () => {
    expect(Ejercicio1(5)).toBe(5)
  })
 
  it('should return CabreraRamirez if number provided is multiple of 33', () => {
    expect(Ejercicio1(33)).toBe('CabreraRamirez')
    expect(Ejercicio1(99)).toBe('CabreraRamirez')
  })
  it('should return AridaneCabrera if number provided is multiple of 22', () => {
    expect(Ejercicio1(22)).toBe('AridaneRamirez')
    expect(Ejercicio1(44)).toBe('AridaneRamirez')
    
  })
  it('should return AridaneCabreraRamirez if number provided is multiple of 66', () => {
    expect(Ejercicio1(66)).toBe('AridaneCabreraRamirez')
    expect(Ejercicio1(132)).toBe('AridaneCabreraRamirez')
    expect(Ejercicio1(198)).toBe('AridaneCabreraRamirez')
  })
})

 