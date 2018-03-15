'use strict'
function mostrar() {
    const X  = 2
    {
        const X = 23
    }
    console.log(X)
}//fin de la función mostrar 

const X = 5
mostrar();

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}


function mostrarCircunferencia(radio){
    let cir = calcularCircunferencia(radio)
    console.log(`
    La circunferencia de radio ${radio}
    tiene de longitud ${cir}`
    )
}
mostrarCircunferencia(5)


