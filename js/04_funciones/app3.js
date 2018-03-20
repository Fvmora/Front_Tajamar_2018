function calcularCuadrado ( a ) {
    a *= a
    return a
}

function calcularCubo ( a ) {
    a = a * a * a
    return a
}

function mostrarCalculo (n, f) {  //n va a se un número y f una función(pasar una funcion a otra funcion como parametro se llama callback)
    console.log(`El resultado es ${f(n)}`)
}
let n = 5
mostrarCalculo(n, calcularCuadrado)
mostrarCalculo(n, calcularCubo)
mostrarCalculo(n, function(){  //aquí le pasamos una function anónima.
    return n*2
})


setTimeout(function () {
    console.log(calcularCubo(n))
}, 2000) //es código asincrónico, no bloquea.

for (let i = 0; i < 10; i++){
    console.log(i)
}



function mostrarResultado1 (){
    console.log(calcularCubo(n))
}

let mostrarResultado2 = function (){
    console.log(calcularCubo(n))
}
setTimeout(mostrarResultado1, 1000)
setTimeout(function(){      
    console.log(calcularCubo(n))
}, 3000)



let nuevaFuncion = mostrarResultado1
nuevaFuncion()


