const myCart = document.getElementById('cart');

function cart(){
    let num = myCart.innerHTML;
    myCart.innerHTML++;
    
    return num; //No es necesario de momento pero agregue un return por si necesitara usar esa variable en un futuro
}