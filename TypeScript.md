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
        /*Con la interrogacion definimos que puedo o no estar en el objeto
        o anadirlo mas tarde */
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