
//objeto literal/
const user = {
	nombre : 'Pepe',
    apellido : 'Perez',
    direccion : {
        calle : 'blabla',
        ciudad : 'blable'
    },
	edad : 23,
    isCasado : true }
    
console.log(typeof user)

user.cargo = "CEO"

console.log(user)

//otros tipos de objetos.

//Array

//Es un conjunto de propiedades que se indexan numéricamente. 

let aDatos = [12, 23, 45, 45, 87] //siempre se empieza a contar desde 0.
let aDatosChungo = [12, 'Pepe', true, null, undefined] //Puedes mezclar todo tipo de datos.

aDatos[15] = 30 //se crearan posiciones vacías hasta la 15, en la que añade 30.
aDatos.unshift('casa')
aDatos.push('perro')
let p = aDatos.pop()
console.log(p)
console.log(aDatos)

let aUsuarios = [
        {nombre : 'Pepe',
        apellido : 'Perez',
        direccion : {
            calle : 'blabla',
            ciudad : 'blable'
        },
        edad : 23,
        isCasado : true},
        {nombre : 'María',
        apellido : 'Perez',
        direccion : {
            calle : 'blabla',
            ciudad : 'blable'
        },
        edad : 23,
        aficiones : ['deporte', 'papiroflexia'],
        isCasado : true},
] //arrays de objetos en formatos Json

console.log(Array.isArray(aUsuarios))

