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
*/
const listadoDeProductos = ["zapatillas", "remeras", "chanclas"];

let acumuladorDeTexto ="";

for(let i = 0; i < listadoDeProductos.length ; i++){
    acumuladorDeTexto += "<div class='salame'><h1>"+listadoDeProductos[i]+"</h1><button>Agregar</button></div>";
}
document.write(acumuladorDeTexto)







