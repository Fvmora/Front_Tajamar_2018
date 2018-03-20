function main () {

    function calcularCubo ( a ) {
        a = a * a * a
        return a
    }

    let n = 6

    let mostrarResultado2 = function (){ //eso sólo se puede hacer en javascript.
        console.log(calcularCubo(n))  //función anidada. 
    }
    console.log(typeof n)
    console.log(typeof mostrarResultado2)

    mostrarResultado2()

    return calcularCubo
}

console.log(main()(3))

