function main(){   


let num1 = 23
let num2 = '20'

let r = num1 - num2 //convierte a num2 en number automáticamente mientras dura la operación y da 3.

console.log(r)
console.log(typeof r)
console.log(typeof num2)

r = num1 + num2 //con la operación suma -el operador + está sobrecargado- es el operador de concatenación por lo que el string tiene preponderancia.
//El resultado sería 2320


let x = 'Hola '
let y = 'Pepe'
console.log(x + y)


r = num1 + +num2
r = r + 1 // el signo + delante de un string tb lo convierte a número.
console.log(r)


r = num1 - x
console.log(r)
console.log(typeof r)

r = 0 / 0
console.log(r)
console.log(typeof r)
if (isNaN(r)){          //isNaN  //es un NaN
    console.log('Ole, has conseguido un NaN')
}





}

main()  //el programa funciona igual pero no ya tengo variables globales por lo que es mucho más robusto.


