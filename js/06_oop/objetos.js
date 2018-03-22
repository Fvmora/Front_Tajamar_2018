let libro1 = {
    autor : 'Tolkien',
    titulo : 'El señor de los anillos',
    editorial : 'Minotauro',
    fecha : new Date('1954'),
    generos : ['Fantasía'],
    mostrarRefencia : function() {
    let ref = this.autor + ', '
    ref += this.titulo + ', '
    ref += this.editorial + ', '
    ref += this.fecha.getFullYear() + ', '
    ref += this.generos[0] + '.'
    console.log(ref)
    }
}

libro1.mostrarRefencia()


let miFuncion = function(){
    console.log ('Soy una función')
    console.log(this)
}


//Opciones de invocacion 
//La diferencia entre funciones y métodos está en el patrón de invocación
//que determina cual es el valor de this

//patrón de invocación Function ->this es el objeto global del programa (del host en el que me encuentre).
miFuncion()



//patrón de invocación Method -> this es el objeto en el que vive la función.
let o = {head: 'Soy un objeto',
        metodo: miFuncion }

o.metodo()
//patron de invocación Constructor-> Una function constructora crea un nuevo objeto y this es este nuevo objeto.
let oNuevoObjeto = new MiFuncion() //el new delante la function la convierte en una construccion.


//patrón de invocación Apply -> permite definir el valor de this.

let o = {head: 'Soy un objeto'}
 
let miFuncion = function(){
    console.log ('Soy una función')
    console.log(this)
}

miFuncion.call(o)  //se le dice a la función que haga una llamada al objeto o.  this es el objeto. Una función ha llamado al objeto para que la ejecute el objeto (como contexto).

