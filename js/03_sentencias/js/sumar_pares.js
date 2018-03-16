let aDatos = [23, 54, 'perro', 34, 78, 67]

//función que comprueba si el argumento es par o impar retornando 0, 1, ó -1 si el argumento no es un número.
function calcPar(n) {
    return isNaN(n/2) ? -1 : n%2
}
let total = 0
for (let i = 0; i < 6; i++){
    if (calcPar(aDatos[i]) === 0) {
        total += aDatos[i]
    }else if (calcPar(aDatos[i]) === 1) {
        total += aDatos[i]
    }else if (calcPar(aDatos[i]) === -1) {
        total += `Hay un string que es ${aDatos[i]}`
    }
}
console.log(total)