/* decartar todo lo que no sean números */
//dividir entre 2 y si existe el modulo de 2 es impar.
'user strict'
/* 
function esPar(numero){
    let mensaje = 'El número es '
    let resto = numero % 2 
    if ( resto ){
        mensaje += 'impar.'
    }else {
        mensaje += 'par.'
    }
return mensaje
}

function test(numero){
    if(!isNaN(numero)) {
    
    console.log(esPar(numero))
    }else {
    console.log('Escribe un número.')
    }
}

test('pepe') *///este es el que he hecho yo.

//Devuelve 0, 1, -1 si el argumento no es un número y -2 si el argumento contiene decimales.
/* function calcularPar(n) {
    let r = 0
    if (isNaN(n/2)){
        r = -1
    } else if (parseInt(n) != parseFloat(n)){
        r = -2
    }
    else {
        r = n%2
    }
    return r
} */

//función que comprueba si el argumento es par o impar retornando 0, 1, ó -1 si el argumento no es un número.
function calcPar(n) {
    return isNaN(n/2) ? -1 : n%2
}

//esto es para testear la función
function test (n) {
    console.log(n)
}

test(calcPar())
test(calcPar('Pepe'))
test(calcPar(12))
test(calcPar(11))       //el testing se suele hacer con funciones de test ya definidas o con framework de testing
// el testing es hasta aquí.

function mostrarEsPar(n) {
    let aMensajes =  [
        `El número ${n} es PAR`,
        `El número ${n} es IMPAR`,
        `El número ${n} no es un número`]

    //r puede valer 0, 1, ó -1. Si vale 0 lee la posición 0, si vale 1, lee la 1 si vale -1 la convierto en 2 para que lea la posición 2.
    let r = calcPar(n)
    r = (r === -1) ? 2 : r //los errores por convenio se codifican como -1
    console.log(aMensajes[r]) //codifico en array para poder mostrar cada posición indicando la posición en el array

}

mostrarEsPar('Pepe')
mostrarEsPar(12)
mostrarEsPar(11)


/* //Ejemplos de switch

function mostrarEsParCasos (n) {
    //r puede valer 0, 1, -2, y -3
    let r = CalcularPar(n)
    let mensaje
    switch (r) {
        case 0 : 
        mensaje = `El número ${n} es PAR`        //todos los casos van contra r 
        break
        case 1 :
        mensaje = `El número ${n} esIMPAR`
        break
        case -2 : 
        mensaje = `El dato ${n} no es un número o es decimal`
       // break  //Se combinan dos case con el mismo mensaje. 
        case -3 :  
        mensaje = `El dato ${n} no es un número o es decimal`
        break
        default  //en cualquier otro caso haz esto que te digo a continuación.
    }
    console.log(mensaje)
} */