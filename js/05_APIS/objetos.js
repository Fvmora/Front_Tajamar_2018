let libro1 = {
    autor : 'Tolkien',
    titulo : 'El señor de los anillos',
    editorial : 'Minotauro',
    fecha : 1954,
    generos : ['Fantasía']
    
}
libro1.mostrarRefencia = function() {
    let ref = this.autor + ', '
    ref += this.titulo + ', '
    ref += this.editorial + ', '
    ref += this.fecha + ', '
    ref += this.generos[0] + '.'
    console.log(ref)
}

//un método es una función anónima que asignamos dentro de una propiedad de un objeto determinado.
//this es una palabra reservada para que asocie a las propiedades propias.


libro1.mostrarRefencia()


let x = 'Pepe'

console.log(isNaN(x)) //función global. En la mayoría de los lenguajes las funciones de texto son de este tipo.
                        // en javascript están definidas como métodos.

//wrapper objects //para los strings y los numbers
//envuelve el string de un objeto especial que sale de la nada. Aparece, ejecuta el método y desaparece.
//Es el mecanismo que se utiliza para que todos los elementos de javascript se manipulen como si fueran objetos.

console.log(x.toUpperCase())

let sFrase = 'Un anillo para gobernarlos a todos'
let aDatos = sFrase.split(' ') //convierte una cadena string en un array.
console.log(aDatos)

let nuevaFrase = aDatos.join(' ')
console.log(nuevaFrase)

