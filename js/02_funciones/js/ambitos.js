'use strict'
function mostrar() {
    console.log(x)
}//fin de la función mostrar 

var x = 12 //como es global podemos acceder a esta variable desde cualquier sitio.
mostrar()


function mostrar() {
    var x = 12  //aquí la variable es local por lo que no existe x fuera de la función mostrar.
}//fin de la función mostrar 

 
mostrar()
console.log(x)


function mostrar() {
     x = 12  //aquí la variable es global que existe x fuera de la función mostrar.
}//fin de la función mostrar 

 
mostrar()
console.log(x)


var x = 12
function mostrar(x){
    //no acceder directamente a las variables globales, se pasan como parámetro.
    console.log(x)
}
mostrar(x)

function mostrar(){
    let x=32
    if(true){
        console.log(x)
    }
}
mostrar()

