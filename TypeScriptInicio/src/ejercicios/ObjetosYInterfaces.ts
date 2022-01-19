

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
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
    
    console.table(persona2)