//aDatos es una INSTANCIA de Array

let aDatos = [1, 12, 67]

aDatos2 = new Array(5)
console.log(aDatos2.length)  //5

aDatos2 = new Array(5)

let aDatos3 = new Array( 5, 6, 8, 5)  //= let aDatos3 = [5, 6, 8, 5] Se invoca new array y se instancia un objeto Array.
//que tiene todos los métodos del objeto array.




//Métodos de Arrays.
//Inmutables ->Esto se refiere a lo que hacen los métodos sobre el array concreto sobre el que actúan.
//devuelve un resultado pero no cambia el array.

aLetras.join('') 
aLetras.slice(inicio, fin)  //devuelve una porción del array: 
//Para hacer una copia aLetrasOriginal = aLetras.slice(0, aLetras.length-1)


//Mutables
//cambian el array

aLetras.sort() //->ordena los elementos en orden alfabetico
let aNuevo = aLetras.splice(posicion inicio, cuanto quiero que extraiga, 'Introduce esto donde estaban los valores extraidos')               //es mutable pero devuelve algo.

//para quitar un solo elemento de un array. Por ejemplo el elemento 7.
let aNuevo = aLetras.splice(7, 1)

aLetras.push('') //añadir último
aLetras.pop() //quitar el ultimo
aLetras.shift() //quitar el primero
aLetras.unshift('') //añadir el primero






