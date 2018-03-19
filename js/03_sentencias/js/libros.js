/* libro
- titulo
- autor  
- editorial  
- fecha  
- generos 
 *///modelo teórico de datos. Ahora hay que pasarlo a un objeto(un modelo de datos).
{
 let libro = {
     titulo : '',
     autor : '',
     editorial : '',
     fecha : 0,
     generos : [],
 }

let libro1 = Object.create(libro)                    //esta propiedad nos permite crear a partir de un objeto vacío(plantilla) 
                                        //todos los objetos que queramos. No es muy útil porque no es necesario.
let libro2 = Object.create(libro)

libro1.autor = 'Tolkien'
libro1.titulo = 'El señor de los anillos'
libro1.editorial = 'Minotauro'
libro1.fecha = '1954'
libro1.generos = ['Fantasía']

libro2.autor = 'Perry'
libro2.titulo = 'El señor de los pardillos'
libro2.editorial = 'MiniMario'
libro2.fecha = '1985'
libro2.generos = ['Ciencia Ficción']

console.log(libro1)
console.log(libro2)
}

//otro ejemmplo:  

let libro1 = {
    autor : 'Tolkien',
    titulo : 'El señor de los anillos',
    editorial : 'Minotauro',
    fecha : 1954,
    generos : ['Fantasía']
}

let libro2 = {
    autor : 'William Gibson',
    titulo : 'Neuromante',
    editorial : 'Minotauro',
    fecha : 1980,
    primera_edicion : {
        editorial : 'Acme',
        fecha : 1982

    },
    generos : ['SciFi', 'Cyberpunk']
}
/* 
let user = 'Pepe'
console.log(libro1)
console.log(`El autor es ${libro2.autor}`, user)
console.log(user)
console.log(typeof libro1.fecha)
console.log(typeof libro2.generos)
console.log(typeof libro2.generos[0])
console.log(libro2.primera_edicion.editorial)


libro1.personajes = []   //se le acaba de añadir la propiedad personajes a libro1 */

/* 
forin */
for (const key in libro1) {
    console.log(`La clave ${key} vale `, libro1[key])  //libro1[key] ->es la segunda forma de acceder a los valores de los objetos. Esta forma -usando los corchetes- sólo se usa cuando no conocemos el nombre de la propiedad.
              //El va guardando las key (clave), una cada vuelta.
        
    
}