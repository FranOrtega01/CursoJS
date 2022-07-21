
const myCart = document.getElementById('cart'); //Número de elementos en el carrito mostrado en la página
const listaProductos = []; //Array con los productos de mi tienda
const carrito = []; //Array con los productos dentro del carrito
let carritoPrice = 0; //Precio total del carrito


//Función constructora de un producto
function Producto(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
}

//Agregar un producto a la lista mediante la constructora
function agregarProducto(id, name, price){
    listaProductos.push(new Producto(id, name, price));
} 

//Remover un producto de la lista
function removerProductoList(id){
    let indexList = listaProductos.findIndex((producto) => producto.id === id);
    if(indexList !== -1) listaProductos.splice(indexList,1);
}

//Agregar producto al carrito
function cart(id){
    let objeto = listaProductos.find((el) => el.id === id); //Busca el elemento con esa id y lo agrega al carrito
    carrito.push(objeto);
    //Actualizar precio y numero del carrito
    myCart.innerHTML = carrito.length;
    carritoPrice += objeto.price;
    console.log(`Total actual del carrito: $${carritoPrice}`)
}

//Remover producto del carrito
function removerProductoCart(id){
    let indexCart = carrito.findIndex((producto) => producto.id === id); //Busca el index del id indicado

    carritoPrice -= carrito[indexCart].price; //Resta el precio del objeto con el index buscado

    if(indexCart !== -1) carrito.splice(indexCart,1); //Borra el elemento con la id indicada
    myCart.innerHTML = carrito.length; //Actualiza el carrito
}

//Filtrar los productos por precio
function filtrarPrecio(arr, priceFilter){
    const filtro = arr.filter((el) => el.price < priceFilter);
    return filtro;
}

//Productos de mi tienda------------
agregarProducto(1090, 'Chanclas',40);
agregarProducto(1091, 'Gorra', 15);
agregarProducto(1092, 'Medias', 5);
agregarProducto(1093, 'Paraguas', 20);
agregarProducto(1094, 'Zapatillas', 80);
agregarProducto(1095, 'Camiseta', 60);
agregarProducto(1096, 'Shorts', 30);
agregarProducto(1097, 'Pelota', 40);
agregarProducto(10, 'PruebaRemover', 90); 
//----------------------------------

//Prueba remover producto de la lista ✓
removerProductoList(10); 
// console.log(listaProductos);

//Prueba remover producto del carrito ✓
cart(1090); //Precio: 40
cart(1093); //Precio: 20
cart(1092)  //Precio: 5
removerProductoCart(1090); // -40
removerProductoCart(1093); // -20
console.log(carrito);
console.log(`Total actual del carrito: $${carritoPrice}`); //Precio esperado: 5
//----------------------------------

//Prueba filtros dado precio ✓
pruebaFiltro = filtrarPrecio(listaProductos, 20);
console.log(pruebaFiltro); //Productos esperados: Medias, Gorra


/*Pensé también en agregar un filtro por categorías del estilo:

function filtrarPrecio(arr, categoriaFilter){
    const filtro = arr.filter((el) => el.name.includes('categoriaFilter'));
    return filtro;
}
pruebaCategoria = filtrarPrecio(listaProductos, 'shorts');

Pero tenía que agregarle la categoría a todos los productos así que lo voy a dejar para la prox entrega con DOM!
*/
//----------------------------------

































