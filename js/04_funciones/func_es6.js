//funcion clásica asignada a variable.

let calcularCubo = function ( a ) {
    return a * a * a
}

//En ES6 función "arrow"(lambdas) asignadas a variable.
//fat arrow =>
//formato extenso.

let calcularCuboES6 = ( a ) => {
    return a * a * a
} 

//abreviado ->si sólo hay un parámetro y una sólo línea de código.

let calcularCuboES6 =  a  =>  a * a * a
 
//Las arrow no pueden ser funciones constructoras y el objeto this es más contundente.


let a = 12

setTimeout(calcularCuboES6, 2000)
setTimeout(function ( a ) {
    return a * a * a
}, 2000)

setTimeout( a => a * a * a, 2000)

setTimeout(() => {
    a= 12
    console.log(a*a*a)
}, 3000)