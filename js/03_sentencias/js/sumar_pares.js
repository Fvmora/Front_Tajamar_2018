let aDatos = [23, 54, 33, 34, 78, 67]

//función que comprueba si el argumento es par o impar retornando 0, 1, ó -1 si el argumento no es un número.
function isPar(n) {
    return isNaN(n / 2) ? -1 : n % 2
}

function sumarPares(aDatos) {
    let total = 0
    for (let i = 0; i < 6; i++) {
        if (!isPar(aDatos[i])) {  //not(!) Calcular par para que cuando sea 0, entre en el if. Para que el 0 sea un true.
            total += aDatos[i]      //hay que entender el if como un conversor de lo que viene en un booleano (se evalúa).
                                    //En booleano 0 corresponde a false. Cualquier nº que no sea 0 es true (incluidos                                   // los negativos).
            
        
        }                              
    }
    return total
}
function verSumaPares(aDatos) {
    console.log('El resultado de la suma de los pares es ', sumarPares(aDatos))
}

verSumaPares(aDatos)


//null y undefined son false tb. Como 0.