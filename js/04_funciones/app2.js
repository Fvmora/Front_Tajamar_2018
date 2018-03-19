function calcularCuadrado ( a ) {
    a *= a
    return a
}

//Los parámetros elementales (number, strings, booleans) pasan por valor.

let a = 5
console.log(calcularCuadrado(a))
console.log(a) 




function calcularCubo( params ) {
    params.valor = params.valor * params.valor * params.valor
    return params.valor
}

params = { valor : 5 }
console.log(calcularCubo(params))
console.log(params)

/* 25
5
125
{ valor: 125 } */ //vale 125 porque le he pasado una referencia. Si recibo objetos como parámetros no debo escribir sobre ellos, usarlos sólo como lectura. 
//Para que no pase: Crear un clone antes de enviárselo al objeto.

function calcularCubo( params ) {
    params.valor = params.valor * params.valor * params.valor
    return params.valor
}
params = { valor : 5 }
params2 = Object.assign({}, params)
console.log(calcularCubo(params2))
console.log(params)

/* 125
{ valor: 5 } */

//--------------------------------------------

let oUser = {nombre : 'Pepe', apellido : 'Pérez'}

//Transformar un objeto en String JSON ->Cuando queremos enviar nuestros datos a un servidor. A los servidores se les mandan cadenas de caracteres ya que no sabemos en que está el servidor, si no está en javascript no entiende lo que es un objeto javascript.

/* JSON.stringify() */ 

let sUser = JSON.stringify(oUser);
console.log(sUser)

/* {"nombre":"Pepe","apellido":"Pérez"} */

/* JSON.parse() */ //convierte un string en un objeto.

let oUser2 = JSON.parse(sUser)
console.log(oUser2) //{ nombre: 'Pepe', apellido: 'Pérez' }

//Hacer un stringify y luego parsear es una forma de hacer una copia de un objeto en otro.