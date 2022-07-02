//Entregable clase 3, crear un algoritmo usando for/while.

/*

let primerNumero = parseInt(prompt("Decime el primer número"));//Pide un número y lo pasa a entero
    while (isNaN(primerNumero)){
        primerNumero = parseInt(prompt("Eso no es un número")); //Hasta que no sea un número seguir pidiendo
    }

let segundoNumero = parseInt(prompt("Decime el segundo número"));

    while (isNaN(segundoNumero)){
        segundoNumero = parseInt(prompt("Eso no es un número"));
    }

let suma;
if (! isNaN(primerNumero) && !isNaN(segundoNumero)){ //Suma ambos y muestra en consola
    suma = primerNumero + segundoNumero;
}
console.log(`La suma es ${suma}!`);
document.write(`<h1 style="font-size:60px; text-align:center;">La suma es ${suma}!</h1>`);

*/


/*----------------------------------------------------------------------------------------
Recorre el array con los días de la semana y crea <H1> por cada día */

/*

let semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

let diasDeLaSemana = "";

for(let i = 0; i < semana.length; i++){
    diasDeLaSemana += `<h1 style="font-size:60px; text-align:center;">${semana[i]}</h1>`;    
}

document.write(diasDeLaSemana);

*/

/*----------------------------------------------------------------------------------------
Mira las notas y las asistencias y escribe si esta o no aprobado*/


/*

let notas = [];
let sumaNotas = 0

for(let i = 0; i < 5; i++){
    let nota = parseInt(prompt("Decime tus notas")); //Pide una nota
    while(isNaN(nota) || nota>10){ //Si la nota es mayor a 10 o no es un número, no es válido y pide de nuevo
        nota = parseInt(prompt("No es una nota válida, decime tu nota")); //Hasta que no sea un número seguir pidiendo
    }
    notas.push(nota); //Agrega la nota al array
    sumaNotas += nota; // Suma todas las notas para el promedio
}
let asistencias = parseInt(prompt("Ahora decime tus asistencias"));

let promedio = sumaNotas/notas.length; //El promedio es la suma de las notas (sumaNotas) dividido la cantidad de éstas (notas.length)

if(promedio >= 7 && asistencias > 20){ //Si promedias 7 o más y tenes mas de 20 asistencias aprobas
    console.log("Estás aprobado aguante boca!!");
    document.write("<h1 style='font-size:100px';>Estás aprobado aguante boca!!</h1>");
    }else{
    console.log("No aprobaste :(");
    document.write("<h1 style='font-size:100px';>No aprobaste :(</h1>");
}

*/



