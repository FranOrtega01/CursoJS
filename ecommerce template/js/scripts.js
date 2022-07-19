const myCart = document.getElementById('cart');

const carrito = [];

let carritoPrice = 0;

const listaProductos2 = [];


const listaProductos = [
    {id:1090, name:'Chanclas', price: 40},
    {id:1091, name:'Gorra', price: 15},
    {id:1092, name:'Medias', price: 5},
    {id:1093, name:'Paraguas', price: 20},
    {id:1094, name:'Zapatillas', price: 80},
    {id:1095, name:'Camiseta', price: 60},
    {id:1096, name:'Shorts', price: 30},
    {id:1097, name:'Pelota', price: 40},
];

function cart(id){
    
    let objeto = listaProductos.find((el) => el.id === id);
    carrito.push(objeto);
    myCart.innerHTML = carrito.length;
    carritoPrice += objeto.price;

    console.log(carrito);
    console.log(carritoPrice)
}


/*
//Funcion constructora que crea los productos dado los parametros

function Producto(id,name,price){
    this.id = id;
    this.name = name;
    this.price = price;
}

//Funcion que llama a la constructora y agrega el producto creado a la lista (array) de listaProductos2

function AgregarProducto(id,name,price){
    listaProductos2.push(new Producto(id,name,price));
}

//Agrega al carrito el objeto seleccionado
function cart2(id){
    
    let objeto = listaProductos2.find((el) => el.id === id);
    carrito.push(objeto);
    myCart.innerHTML = carrito.length;
    carritoPrice += objeto.price;

    console.log(carrito);
    console.log(carritoPrice)
}

//Creando objetos de ejemplo
AgregarProducto(1, 'zapatillas', 18);
AgregarProducto(2, 'chanclas', 18);
AgregarProducto(3, 'remeras', 18);

console.log(listaProductos2)

//cart2 agrega productos de prductos2 (dada una id) al carrito.
cart2(1);
cart2(2);
*/


