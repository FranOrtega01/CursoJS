
const myCart = document.getElementById('cart'); //Número de elementos en el carrito mostrado en la página
const listaProductos = []; //Array con los productos de mi tienda

const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
let carritoPrice = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
localStorage.setItem('CantidadDeProductos',carrito.length)
const totalCarrito = localStorage.getItem('CantidadDeProductos');
myCart.innerHTML = `${totalCarrito} - $${carritoPrice}`;


//Función constructora de un producto
function Producto(id, name, price, img){
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
}

//Agregar un producto a la lista mediante la constructora
function agregarProducto(id, name, price,img){
    listaProductos.push(new Producto(id, name, price, img));
} 
//Remover un producto de la lista
function removerProductoList(id){
    let indexList = listaProductos.findIndex((producto) => producto.id === id);
    if(indexList !== -1) listaProductos.splice(indexList,1);
}

//Funciones Carrito------------------------------------------------------------------------------------
//Agregar producto al carrito
function cart(id){
    let objeto = listaProductos.find((el) => el.id === id); //Busca el elemento con esa id y lo agrega al carrito
    carrito.push(objeto);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    //Actualizar precio y numero del carrito
    let carritoPrice = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)
    console.log(carrito.length);
    localStorage.setItem('CantidadDeProductos',carrito.length)
    myCart.innerHTML = `${carrito.length} - $${carritoPrice}`;

}

//Remover producto del carrito
function removerProductoCart(id){
    let indexCart = carrito.findIndex((producto) => producto.id === id); //Busca el index del id indicado
    if (totalCarrito > 0 && indexCart !== -1){
        
        carrito.splice(indexCart,1); //Borra el elemento con la id indicada
        localStorage.setItem('carrito', JSON.stringify(carrito))
        let carritoPrice = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0)

        myCart.innerHTML = `${carrito.length} - $${carritoPrice}`;
        //Actualiza el carrito
        console.log(`Total actual del carrito: $${carritoPrice}.00`)
        console.log(carrito);
    }else if (carrito.length == 0){
        console.log('El carrito esta vacio!')
    }else{
        console.log('El producto no esta en el carrito')
    }
    localStorage.setItem('CantidadDeProductos',carrito.length)
}
//----------------------------------
//Vaciar el carrito ✓
const btnVaciarCarrito = document.getElementById('borrarCarrito');
btnVaciarCarrito.addEventListener('click', () => {
    carrito.splice(0,carrito.length); //Vacia el carrito
    localStorage.setItem('carrito', JSON.stringify(carrito)) //Sube el carrito vacio al storage
    carritoPrice = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0) // Se actualiza el precio
    console.log('Se vació el carrito!')
    localStorage.setItem('CantidadDeProductos',carrito.length);
    myCart.innerHTML = `${carrito.length} - $${carritoPrice}`;
});
//----------------------------------

//Filtrar los productos por precio 
function filtrarPrecio(arr, priceFilter){
    const filtro = arr.filter((el) => el.price < priceFilter);
    return filtro;
}

//Productos de mi tienda------------
agregarProducto(1090, 'Chanclas',40,'img/chanclasDeBoca.jpg');
agregarProducto(1091, 'Gorra', 15,'img/gorraDeBoca.jpg');
agregarProducto(1092, 'Medias', 5, 'img/mediasDeBoca.jpeg');
agregarProducto(1093, 'Paraguas', 20, 'img/paraguasDeBoca.jpeg');
agregarProducto(1094, 'Zapatillas', 80, 'img/zapatillaDeBoca.jpg');
agregarProducto(1095, 'Camiseta', 60, 'img/RemeraBoca.jfif');
agregarProducto(1096, 'Shorts', 30, 'img/shortBoca.jfif');
agregarProducto(1097, 'Pelota', 40, 'img/pelota.jfif');
//----------------------------------

//Prueba filtros dado precio ✓
// pruebaFiltro = filtrarPrecio(listaProductos, 20);
// console.log(pruebaFiltro); //Productos esperados: Medias, Gorra

/* Idea
function filtrarPrecio(arr, categoriaFilter){
    const filtro = arr.filter((el) => el.name.includes('categoriaFilter'));
    return filtro;
}
pruebaCategoria = filtrarPrecio(listaProductos, 'shorts');
*/
//----------------------------------

//Template de productos ✓
const productosEnTienda = document.querySelector('#products');
const templateProduct = document.querySelector('#templateProduct').content;
const fragment = document.createDocumentFragment();

listaProductos.forEach(item => {
    templateProduct.querySelector('h5').textContent = item.name;
    templateProduct.querySelector('img').src = item.img;
    templateProduct.querySelector('p').textContent = `$${item.price}.00`;
    templateProduct.querySelector('.add').setAttribute('onclick', `cart(${item.id})`);
    templateProduct.querySelector('.remove').setAttribute('onclick', `removerProductoCart(${item.id})`);
    const clone = templateProduct.cloneNode(true);
    fragment.appendChild(clone);
});
productosEnTienda.appendChild(fragment);
//----------------------------------

//Prueba STORAGE

// localStorage.setItem('carrito','Remera de bokita');
//Se puede reemplazar el valor
// console.log(localStorage.getItem('carrito'));


//JSON
/*
(!) JSON.stringify(carrito) -> pasa el carrito a string para ponerlo en storage 

quiero guardar el array del carrito en el storage y vincularlo al numero del carrito

(!) const carrito = JSON.parse(localStorage.getItem('carrito'))  ->  lo trae y lo parse *1

(!) Ahora uso el reduce para el numerito:
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById('cart').innerHTML = `${carrito.length}`

Para la primera vez que entra:

Hago una validacion *1

const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [] -> si existe el carrito se muestra ese, sino se muestra []


--Como mostrar items del carrito

*/












