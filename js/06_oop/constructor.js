function Libro () {
    var autor = 'Pepe',
    this.autor = '',       //Esto es lo mismo que poner lo de var autor = 'Pepe'
    this.titulo = '',
    this.editorial = '',
    this.fecha = '',
    this.generos = ''   
}    //esta función lo que hace es que crear variables globales.

/* Libro() */


function Libro (a,b,c,d,e) {
    this.autor = 'a',      
    this.titulo = 'b',
    this.editorial = 'c',
    this.fecha = 'd',
    this.generos = 'e'   
}  

libro1 = new Libro()   //al ponerle new a una función se crea un nuevo objeto que guarda como this.
console.log(libro1)  //Libro {autor: '', titulo: '', etc.}


//--------------------------
function Libro (a,b,c,d,e) {
    this.autor = a,      
    this.titulo = b,
    this.editorial = c,
    this.fecha = d,
    this.generos = e   
}  

let libro1 = new Libro (
    'Tolkien', 
    'El Señor de los anillos',
    'Minotauro',
    new Date('1954'),
    ['fantasia' ]
 ) /* Se llama función constructora porque es capaz de construir objetos. */

//En ES6 se pueden definir parámetros por defecto. 
 function Libro (a = '',b = '',c = '',d = new Date(0) ,e = []) {
    this.autor = a,      
    this.titulo = b,
    this.editorial = c,
    this.fecha = d,
    this.generos = e  
}

/* Let libro2 = new Libro()   *///Tenemos que contemplar que el usuario meta ejecute la función sin meter valores.



//---------------

function Libro (a = '',b = '',c = '',d = new Date(0) ,e = []) {
    this.autor = a,      
    this.titulo = b,
    this.editorial = c,
    this.fecha = d,
    this.generos = e   
}

let libro3 = new Libro('William Gibson', 'Neuromante', 'Minotauro', new Date('1980'), ['Fantasía'])

console.log(libro2.constructor.name)   //esto dice Libro, que es su constructor.