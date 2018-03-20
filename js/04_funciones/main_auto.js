//funcion autoinvocada, hay que encapsularla y se ejecuta automáticamente. Es anónima.
//Se denomina closure y se usa mucho en javascript.
//patrón IIFE (Inmediately Invoked function expression)

(function (n) {

    function calcularCubo ( a ) {
        a = a * a * a
        return a
    }

   

    let mostrarResultado2 = function (){ //eso sólo se puede hacer en javascript.
        console.log(calcularCubo(n))  //función anidada. 
    }
    

    mostrarResultado2()

    
})(6)



