//Elementales: number, string y boolean.
//Se manipulan por valor: 


let x = 12
let y = 2 * x
x = x + 2

console.log(y) //24  Es porque los elementos se están manipulando por valor. El orden de los elementos.

console.log(x) //14


//Objetos ->se manipulan por referencia.

let object1 = {valor : 12}
let object2 = object1  //copiando la referencia. Tu apuntas al mismo sitio que el objeto1.
object1.valor = 24

console.log(object1)  //valor : 24
console.log(object2)  //valor : 24