let aDatos = [23, 54, 65, 34, 78, 67]



//lo primero es crear un contador i de índice(inicialización).
//Lo segundo hasta cuanto quiero que de vueltas
//Cuanto quieres que vaya sumando i de una vuelta a otra.
//ahora en cada vuelta se hace lo que se quiera.
/* for (let i = 0; i < 6; i++) {
    console.log('Hola a todos, esta es la vuelta ', i + 1)

}  */

/* //Para sacar la suma total y los parciales.
let total = 0
for (let i = 0; i < aDatos.length; i++) {
    total += aDatos[i]  //total = total + aDAtos[i]
    console.log(`El parcial es ${total}`)
} 
console.log( `El total es ${total}` ) */

// Al revés.
let total = 0
for (let i = aDatos.length - 1; i >= 0; i--){
    total += aDatos[i] 
}
console.log( `El total es ${total} al revés` )