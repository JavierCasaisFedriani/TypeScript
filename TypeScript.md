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
