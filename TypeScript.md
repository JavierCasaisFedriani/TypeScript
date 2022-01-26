# TypeScrypt

## Variables
```
/* con let tenemos que definir el tipo de datos*/
let nombre: string

nombre = "javi";

/*Los const no tienen tipos y no crea los metodos set y get*/
const nombre2 = "Javi"

console.log(nombre)
```

## Arrays
```
let habilidades : string[] = [];
/*Esto nos daria error porque no hemos definido que este array permita numeros */
	habilidades = ["hola", 23] 

/* Podemos definir un array con varios tipos */
	let habilidades2 : (string | number)[] = [];
	habilidades2 = ["hola", 23]

/*Para añadir datos utilizamos push */
	habilidades2.push("añadir")
```

## Objetos y interfaces
```
/*Creamos una interfaces */
/*Definimos los tipos de los atributos de los objetos */

interface Persona{
	nombre : string
	hp: number
	habilidades: (string)[]
	/* Con la interrogacion definimos que puedo o no estar en el objet lo anadirlo mas tarde */
	edad ?: number
}

/*Crear Objetos*/
    
const persona = {
	nombre: 'luchador',
	hp: 100,
	habilidades: ['golpear', 'contrarrestar', 'salud']
}
    
/*Para añadir una interfaz utilizamos los dos puntos */
	const persona2 : Persona = {
	nombre: 'Espia',
	hp: 50,
	habilidades: ['Sigilo', 'lucha']
}
    
persona2.edad = 12
    
/* Mostramos los datos de un objeto en una tabla*/

console.table(persona2)
```

## Funciones
```
/*Funciones */
- Las funciones siempre devuelven **undifined** si no hay return

/*Esta funcion por defecto devolvera un number */
function sumar( a: number, b: number){
    return a + b;
}
/* Si quieres que retorne otro dato que no sea number, tendremos que poner despues del parentesis dos puntos(:) y el dato */
function restar(a: number, b: number): string{
    return "hola"
}
/* Funcion flecha */
const sumarFlecha = (num1: number ,num2: number): number =>{
    return num1 + num2;
}

```
## Tipos de parametros

- Parametros obligatorio --> nameVariable: tipoDato
- Paramatros opcionales --> nameVariable ?: tipoDato
- Parametos con valor por defecto --> nameVariable: tipoDato = dato

## Añadir funcion a un objeto

```
interface Personaje{
    nombre: string
    vida: number
    mostrarDato:() => void
}

const Persona1: Personaje ={
    nombre : 'Pedro',
    vida : 25,
    mostrarDato(){
        console.log('Puntos de viada: ', this.vida);
    }
}
```

## DECONSTRUCCION 

Con `:` renombramos atributo

### Desconstruccion de un objeto

```
//ANTES DE DESCONSTRUIR

console.log("Volumen: ", cancion1.volumen)
console.log("Segundos: ", cancion1.segundos)
console.log("Nombre: ", cancion1.cancion)
console.log("Nombre autor: ", cancion1.detalle.nombreAutor)


//DESCONSTRUYENDO
const{cancion: nombreCancion, segundos, volumen, cancion, detalle:{nombreAutor}} = cancion1;

console.log("Volumen: ", volumen)
console.log("Segundos: ", segundos)
console.log("Nombre: ", cancion)
console.log("Nombre autor: ", nombreAutor)
```
### Desconstruir un Array


### Desconstruir una funcion

## Inportacion y Exportaciones 
### Que se puede exportar e importar
- Funciones
- Interfaces
### Pasos
1. Primero tendremos que exportar la interface
```
export interface "nombreInterface"{
	atributo: typo
}
```
2. Y luego imporatamos la interface con `command + .`
```
import "nombre de la interface" from "ruta"

 ```
 
## Clases

### Los atributos pueden ser
- Private
- Public
- Static
### Ejemplo
```

class Heroe{
    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string
        ){}
}

const ironman = new Heroe('ironman', 45, 'Toni');
console.log(ironman)
```

## Herencias
```
class PersonaNormal{
    constructor(
        public nombreNormal: string,
        public direccion: string
    ){}
}

class Heroe extends(PersonaNormal){
    constructor(
        public alterEgo : string,
        public edad: number,
        nombre: string,
        direccionPersona: string
    ){
        super(nombre, direccionPersona);
    }
}

const ironMan = new Heroe("ironMan", 45, "tony", "calle falsa");
console.table(ironMan)

```

## Genericos
```
//La <T> indica que puede ser de cualquier tipo
function queTipoSoy <T> (argumento: T){
    return argumento
}

let soyString = queTipoSoy("Hola que tal");
let soyNumber = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4,5,6]);
//Si quieres especificar algun tipo en concreto tendremos que expecificarlo
let soyNumber2 = queTipoSoy<number>(110);
let soyArrayNS = queTipoSoy<(number | string)[]>([1,2,"hola"]);
```

