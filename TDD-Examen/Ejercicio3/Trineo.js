const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"] 

export const Trineo=(packOfGifts, reindeers)=> {

    let pesoPack = 0;
    let cargaRenos = 0;

    
    packOfGifts
    .forEach(element => {
        let tamaño = element.length;
        pesoPack += tamaño;
        return pesoPack;
    });

    reindeers.forEach(element =>{
        let carga = (element.length * 4)
        cargaRenos += carga;
        return cargaRenos;
    })
 
    let resultado = Math.floor(cargaRenos/pesoPack)
  return resultado;
  
}


