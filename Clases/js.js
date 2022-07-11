// let primerNumero = parseInt(prompt("Decime el primer número"));
//     while (isNaN(primerNumero)){
//         primerNumero = parseInt(prompt("Eso no es un número"));
//     }

// let segundoNumero = parseInt(prompt("Decime el segundo número"));

//     while (isNaN(segundoNumero)){
//         segundoNumero = parseInt(prompt("Eso no es un número"));
//     }

// let suma;
// if (! isNaN(primerNumero) && !isNaN(segundoNumero)){
//     suma = primerNumero + segundoNumero;
// }
// alert("La suma es " + suma + "!");



/*             CLASE 4 - CICLOS Y BUCLES           */


/*
------------------------------------------------------------------------------
Sentencia Break
    
    for (let i = 1; i <= 10; i++){
        
        if(i == 5){
            break;   "Si i == 5 interrumpe el for"
        }
        alert(i);
    }

------------------------------------------------------------------------------
Sentencia Continue

    for (let i = 1; i <= 10; i++){
        
        if(i == 5){
            continue;   "Si i == 5 saltea a la siguiente iteración"
        }
        alert(i);

------------------------------------------------------------------------------

const ligaDeMiEquipo = "Club de barrio";

    "Dependiendo cada caso, hace algo"

    switch(ligaDeMiEquipo){
        case "A":
            console.log("guti");
            break;
        case "B Nacional":
            console.log("sfgsdfgsd");
            break;
        case "B Metro":
            console.log("aaaaaaaaaaaaaaaa");
            break;
    }


Listado de productos

const listadoDeProductos = ["zapatillas", "remeras", "chanclas"];

let acumuladorDeTexto ="";

for(let i = 0; i < listadoDeProductos.length ; i++){
    acumuladorDeTexto += "<div class='salame'><h1>"+listadoDeProductos[i]+"</h1><button>Agregar</button></div>";
}
document.write(acumuladorDeTexto)
*/




/*             CLASE 5 - FUNCIONES          */

/*
// function nombre (parámetro){
//  Bloque de código
// }

// nombre(parámetro)  ->   Llamado a la función

// Primer ejemplo

const producto = "Zapatillas Nike";

function agregarAlCarrito(){
    console.log("Agregas el producto al carrito: " + producto);
}
agregarAlCarrito();

------------
Por HOISTING, se puede llamar a la función ANTES de definirla.
------------
*/

//----------------------------------SCOPE--------------------------------------------

/* Scope: El "alcance" que tiene una variable, si es creada dentro de una función, solo se puede usar dentro de la función porque tiene alcance local.

    let nombre = "Guti";  ->  Scope Global

    function sumar(num1, num2){
        let resultado = num1 + num2;  -> Scope Local
        return resultado;
    }

    function restar(num1, num2){
        let resultado = num1 - num2;  -> Scope Local
        return resultado;
    }
*/


//----------------------------------FUNCIONES FLECHA =>-------------------------------------

/* const suma = (a,b) => {return a + b}         -No afecta HOISTING.


*/

/*             CLASE 6 - OBJETOS          */

// const persona1 = {
//     nombre: "Homero",
//     edad: "39",
//     calle: "Av. Siempreviva 742"
// }


//Se accede a través del "." o "[]"  (No se usan mucho corchetes)

//console.log(persona1.nombre)  -> Homero.

//Se puede modificar una propiedad:
//persona1.nombre = "Marge";
//persona1.edad = 36;
/*
function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona("Homero", 39, "Av.Centenario 1535");
console.log(persona1)
const persona2 = new Persona("Guti", 39, "Av.Rivadavia 5000");
console.log(persona2);
*/

/*
function Persona(literal){
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}
const persona1 = new Person({
    nombre:"Homero", 
    edad:39, 
    calle:"Av.asd"
});
*/

//Ver ejemploObjetos.js  -> Funciones Constructoras


//Metodos----------------------------------------------------------------

//Ver metodos.js  -> Métodos

//Metodo es una función dentro de un objeto

//Este teclado esta en ingles <div class='ingles'>aguante boca </div>,<



