


//invocación de la función
mostrar ('Pepe')

// Declaración de la funcion
//Javascript tiene hitting -> el navegador busca todas las funciones que haya y las levanta y después lee el resto del código. Pero sólo las declaradas.

function mostrar (n) {
    console.log(`Me han pasado ${n}`)
}


//----------------------------------------------------------------------------------------------------
// Función === Objeto  Todo lo que se puede hacer con un objeto se puede hacer con una function.
// Función anónima:

let x = function (n) {console.log(`Me han pasado ${n}`)}

// Asignación de la función a una variable.

let mostrarVariable = function (n) {
    console.log(`Me han pasado ${n}`)
}

// Invocar a función.

mostrarVariable('Juan')


 
