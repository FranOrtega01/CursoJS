//Metodo es una función dentro de un objeto
let cadena = "Hola Coder";

//Ejemplo de métodos:

console.log(cadena.length); //Propiedad.

console.log(cadena.toLowerCase()) //Método

console.log(cadena.toUpperCase()) //Método

//Métodos personalizados:

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
    

//Operador IN y FOR IN


//CLASES -> Estructura para crear objetos... No se está usando.
class PersonaClass{
    constructor(nombre,edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar(){
        console.log("HOLA SOY " + this.nombre);
    }

}

const persona1 = new PersonaClass("Homer",39, "Av. Siempreviva 100");

console.log(persona1);
persona1.hablar()