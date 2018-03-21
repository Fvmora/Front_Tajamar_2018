let hoy = new Date()

console.log(hoy)

//Lo que es Date() es un objeto con un montón de propiedades.

console.log(hoy.getDay())  //el día del mes.

console.log(hoy.getFullYear()) //2018

let ayer = new Date(2018, 2, 20)  //si no le indicas determinado valor lo sustituye por un valor por defecto: 00, 00, 00
//los meses empiezan a contar desde 0
console.log(ayer)

let unDia = new Date(1929382104983)  //->se le puede pasar un timespam y te dice que día es.

console.log(hoy.getTime())  //devuelve el timestamp

console.log(parseInt((hoy - ayer)/(1000*60*60)))   //43 horas 

console.log(hoy + ayer)  //Las concatena.