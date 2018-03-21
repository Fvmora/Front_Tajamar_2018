

let aDatos = [2, 5, 7, 4, 9]
let oDatos = {
    alto: 2,
    ancho: 5, 
    largo: 7, 
    peso: 4,
    color: 9 
}     //dos maneras de guardar el mismo grupo de datos.


console.log('Array')
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];         //aunque sea una constante es como si en cada vuelta del for el const esta en un                                      bloque distinto.
    console.log(item)
}
// let y const tiene como ámbito el bloque en el que se declaran.

/* oDatos se itera con un forin */
console.log('Objeto Forin')

for (const key in oDatos) {
        const item = oDatos[key];
        console.log(item)  
}

console.log('Array con Forin')  //también sirve para iterar sobre arrays, a veces da errores.

for (const i in aDatos) {
        const item = aDatos[i];
        console.log(item)
}

console.log('Array con Forof')     //El forof es ES6 y sólo se puede usar con arrays.

for (const iterator of aDatos) {
    console.log(iterator)
}


aDatos.map()  //los dos esperan una función callback. El primero devuelve el array despues de ejecutar las intrucciones.
aDatos.forEach() // se llama a la función forEach() y ella ya sabe que es un bucle. Espera como parámetro un callback.
                //lo que se ponga dentro de la función recibe un parámetro (item)
                

aDatos.forEach(function(item){   //es lo mismo que un forof o un forin para los arrays. Pero más moderno.
    console.log(item)        //es una función void, no devuelve nada.
}) 

//mejor aún.

aDatos.forEach(item => console.log(item))  //La ejecuta una y otra vez por cada uno de los elementos del array y el item es cada uno de los elementos.

//.map() no modifica el array. Si no que hace un mapa del array.

let aDatos = [2, 5, 7, 4, 9]

let aCuadrados = aDatos.map(item => item * item)  //devuelve un array en el que cada elemento corresponde al original pero modificado en base a la función callback que se le pase.

//Por cada vuelta se le hace a item(el elemento de aDatos) el cuadrado y se guarda modificado.
//Map crea una proyección del original, pero en el proceso aplico una función transformadora a cada elemento.

//da: aCuadrados = [4, 25, 49, 16, 81]


let aDatos = [2, 5, 7, 4, 9]

let aPares = aDatos.filter(item => item%2 === 0)    //en este caso la función callback tiene que ser booleana, si devuelve true pasa el filtro si false no pasa. Si se cumple ese elemento de la iteración pasa al array aPares, si no se cumple no pasa.

//Esto da aPares = [2, 4]

let aImparesCuadrados = aDatos.filter(item => item%2 !== 0).map(item => item*item)
console.log(aImparesCuadrados)
 //Esto da: [25, 49, 81]


let aDatos = [2, 5, 7, 4, 9]

let total = aDatos.reduce((prev, item) => prev += item)     //acumula, reduce el array a un único valor. Recibe 2 argumentos, el valor previo y el final.
console.log(total)
//devuelve 27


aDatos.reduceRight() //hace lo mismo pero empezando a recorrelo por la derecha.


//aDatos.every()
//aDatos.some()


