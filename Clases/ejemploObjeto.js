/*
function Producto(titulo, stock, precio){ //Funcion constructora
    this.titulo = titulo;
    this.stock = stock;
    this.precio = precio;
}

const producto1 = new Producto('Chanclas de BOCA', 157, 200);

console.log(producto1.titulo);
*/

// producto{   Producto literal
//     titulo = "guti",
//     stock = 123,
//     precio = 1,
// }


//Funcion constructora dando los parámetros------------------------------------------------------

//Funcion constructora con parámetros
function AutoConParametro(marca, modelo){ 
    this.marca = marca;
    this.modelo = modelo;
}

//Funcion constructora con parámetros
const miPrimerAutoParametro = new AutoConParametro("Ferrari", 1947); 

//Funcion constructora dado un objeto------------------------------------------------------

//Funcion constructora con un objeto
function AutoConObjeto(objetoDelAuto){ 
    this.marca = objetoDelAuto.marca;
    this.modelo = objetoDelAuto.modelo;
}

//Objeto literal, puedo meter este objeto en la función constructora con objetos
const autoObjeto = { 
    marca:10,
    modelo:900
}

//Llamado a la función constructora dando un objecto como parámetro.
const miPrimerAutoObjeto = new AutoConObjeto(autoObjeto); 




