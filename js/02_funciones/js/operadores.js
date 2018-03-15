//expresión de asignación
let x = 35 //operador de asignación
//instrucción ->side effect
console.log(x)

//asignación incremental y decremental
x++    //x = x + 1          
x--    //x = x - 1

let z = ++x //z valdría el resultado de incrementar a x.
let z = x++ // Igualalo a x y luego incrementalo.

x = 27
y = parseInt(x / 5) //5  Para forzar una división de enteros usamos parseInt

let resto = x % 5 //2 el resto.


//operadores de asignación aritmética
 x = 12
 x += 4 // x = x + 4 = 16

 //operadores relacionales
 x = 12
 y = '12'
 console.log(x == y) //le estoy preguntando una igualdad débil. Si el sistema es capaz de cambiar el tipo y hacerlos iguales.
 console.log(x === y) //Si son idénticas, tb en los tipos. 
 //Esto en un lenguaje que tenga conversión automática de tipos no tiene sentido.
//equivalentes negativos.
console.log(x != y)
console.log(x !== y)

if(x){} //Lo que le pongamos entre los paréntesis se evalúa de forma booleana. Cualquier número mayor que 0 da true.
console.log(!!x) //si niegas dos veces algo lo conviertes en booleano. A veces hace falta la expresión booleana por consola, por ejemplo.

/* operador ternario */
//expresión ? (lo que quiero que pase si es true) : (lo que quiero que pase si es false)
let edad = 12
console.log(edad > 30 ? 'Buenos días' : 'Hola chaval')  





