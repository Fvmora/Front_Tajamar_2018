

'use strict'
/* Esto es una función pura, sólo hace una cosa. Devuelve algo. */
function sumar(a, b) {
    var c = a + b;
    return c; 
}//fin de la función sumar 

function mostrar(r){ //esto es una función void. Hace algo, no devuelve nada.
    console.log("El resultado es ", r)
}
var z = sumar(52, 65);
mostrar(z);//otra forma de hacerlo.
mostrar(sumar(123, 34)); //esto es pasar el resultado de la operación de la función sumar.
mostrar(sumar(23, 45)); //lo que le está llegando es el c del return c de function sumar()

function restar (a, b){
    var c = a - b;  
    return c

}//fin de la funcion restar

var x = 123
var y = 34 
var r = restar(y, x)
mostrar(r)