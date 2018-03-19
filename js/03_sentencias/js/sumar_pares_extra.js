let aDatos = [23, 54, 33, 34, 78, 67]

//función que comprueba si el argumento es par o impar retornando 0, 1, ó -1 si el argumento no es un número.
function isPar(n) {
    return isNaN(n / 2) ? -1 : n % 2
}

function sumarPares(aDatos) {
    let data = {
        total : 0,
        parciales : []
    }
    for (let i = 0; i < 6; i++) {
        if (!isPar(aDatos[i])) {  //not(!) Calcular par para que cuando sea 0, entre en el if. Para que el 0 sea un true.
            data.total += aDatos[i]      //hay que entender el if como un conversor de lo que viene en un booleano (se evalúa).
            data.parciales[data.parciales.length] = aDatos[i]                      //En booleano 0 corresponde a false. Cualquier nº que no sea 0 es true (incluidos                                   // los negativos).
             //La longitud del array es siempre uno por encima del dato en el que estemos por lo que la .length nos sirve
             //para ir guardando los datos en la siguiente posición.                                                           
        
        }                              
    }
    return data
}
function verSumaPares(aDatos) {

    let oResultados = sumarPares(aDatos)
    for (i = 0; i < oResultados.parciales.length; i++){
        console.log(`El parcial es ${oResultados.parciales[i]}`)
    }
    
    console.log('El resultado de la suma de los pares es ', oResultados.total)
}

verSumaPares(aDatos)