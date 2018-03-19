
//Este es el que he hecho yo
/* function calcFactorial(numero){
    let factorial = numero 
    for(i = numero-1; i > 0; i--){
        
            factorial *=  i
        
    }
    return factorial
}
function mostrarFactorial(numero){
    console.log(`El factorial de ${numero} es `, calcFactorial(numero))
}

mostrarFactorial(5) */

function calcFactorial(numero) {
    if (typeof numero === undefined) { throw 0 }
    else if (isNaN(numero / 2)) { throw 1 }
    else if (parseInt(numero) !== parseFloat(numero)) { throw 2 }  //esto es para comprobar que no tiene decimales.
    else if (numero <= 0) { throw 3 }
    //else if (numero > 170) {throw 4}
    else {


        let factorial = 1 //siempre que una iteración incluya multiplicaciones hay que inicializar el valor en 1 para evitar que pongan 0 y de undefined.
        for (i = numero; i >= 1; i--) {

            factorial *= i

        }
        //TODO Comprobar rendimiento.
        if (factorial === 1/0) {  //1/0 ó infinity.
            throw 4     //es la misma que la 4 pero de otra manera.Es lo mismo que ponerle infinity.
        }else {
        return factorial}
    }
}
//test
function mostrarFactorial(numero) {
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numérico',
        'un número con decimales',
        'un número menor que 0',
        'un número tan grande'
    ]


    
    try {
        let mensaje = `El factorial de ${numero} es ` + calcFactorial(numero)
       
        console.log(mensaje)
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}


mostrarFactorial(170)

