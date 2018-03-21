
//lo he hecho yo es muy enrevesado.

let esPalindromo = function(cadena) {
    let cadena0 = cadena.toLowerCase()
    
    let array1 = cadena0.split('')
    for(i = 0 ; i < array1.length ; i++){
        if (array1[i] == ' '){
            array1.splice(i, 1)
        }
    }
    console.log(array1)
    let array2 = array1.slice(0, array1.length)
    array2.reverse()
    

    let cadena1 = array1.join('')
    console.log(cadena1)
    let cadena2 = array2.join('')
    console.log(cadena2)
    let r
    if(cadena1 !== cadena2){
        r = 1
    }else {
        r = 0
    }
    return r
}
let p = 'palíndromo'

let mensajes = [
    `La cadena es un ${p}`,
    `La cadena no es un ${p}`
]

let mostrarFrase = function(cadena){
    console.log(mensajes[esPalindromo(cadena)])
}

let cadena = 'Dabale arroz a la zorra el abad'
let cadena_no_palindromo = 'El perro es verde'

mostrarFrase(cadena)
mostrarFrase(cadena_no_palindromo)