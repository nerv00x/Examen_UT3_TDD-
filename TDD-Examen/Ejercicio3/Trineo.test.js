import { describe,expect,it } from "vitest";
import { Trineo } from "../Ejercicio3/Trineo";


describe('Trineo', () => {
 it('distributeGifts es una funcion',()=>{
    expect(typeof Trineo).toBe('function');
 })

  it('devuelve el número correcto de cajas de regalos que se pueden entregar', () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];
    const resultado = Trineo(packOfGifts, reindeers);
    expect(resultado).toBe(4);
  });
  
  it('devuelve 0 si no hay renos disponibles', () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = [];
    const resultado = Trineo(packOfGifts, reindeers);
    expect(resultado).toBe(0);
  });
  
  it('devuelve 0 si no hay regalos para entregar', () => {
    const packOfGifts = [];
    const reindeers = ["dasher", "dancer"];
    const resultado =  Trineo(reindeers,packOfGifts );
    expect(resultado).toBe(0);
  });
  it('El resultado de distributeGifts es un número positivo', () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];
    const result = Trineo(packOfGifts, reindeers);
    expect(result).toBeGreaterThanOrEqual(0);
  });
  it('El resultado de distributeGifts es un número entero', () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];
    const result = Trineo(packOfGifts, reindeers);
    expect(Number.isInteger(result)).toBe(true);
  });  
 
  
});