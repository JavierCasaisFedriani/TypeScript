

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
/**
 * Crear vehiculos que tenga numero de ruedas, nombre, litrogasolina, consumo, numPerosnas(array)
 * 
 * 
 */

const numRueda = 4 
const consumo = 5
let GasolinaGastada : number

interface Coche{
    NumeroRuedas : number
    Nombre : string
    LitroGasolina : number
    Consumo : number
    NumeroPersona : (string)[]
}

const coche1 : Coche = {
    NumeroRuedas : numRueda,
    Nombre : 'FORD Focus',
    LitroGasolina : 20,
    Consumo : consumo,
    NumeroPersona : ['Pepe', 'Juanito']
}

/*Primera parada a 2 km, Recogemos a Juanito */





/*Segundo parada a 1 km,  Paramos en gasolinera */

/*Tercera parada a 1 km,  Dejamos a maria */

/*Cuarta parada a 25 km, Dejamos a Juanito */

/*Quinta parada a 25 km + 1 km hasta la gasolinera */

/*Sexta parada a 12 km + 1 km, Dejamos a Pepe */