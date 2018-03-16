const userPepe = {
    nombre: 'Pepe',
    apellido: 'Pérez',
    edad: 7,
    aficiones: ['deporte', 'papiroflexia'],
    isCasado: false,
    genero: 'M'
}
const userMaria = {
    nombre: 'María',
    apellido: 'López',
    edad: 53,
    aficiones: ['papiroflexia', 'lectura'],
    isCasado: true,
    genero: 'F'
}
//Lo primero para hacer el ejercicio de que si eres mayor de 18 te salude con un don o doña es crear la constante.
const MAYORIAEDAD = 18


function crearSaludo(user) {
    let mensaje = 'Hola ' //variable operativa mensaje.
   if (user.edad >= MAYORIAEDAD && user.genero === 'M') {  //Esto es un if con dos condiciones.
       mensaje += 'D. '
       
   }else if (user.edad >= MAYORIAEDAD && user.genero === 'F') {
       mensaje += 'Dña. '
   } 

   mensaje += user.nombre  // Lo que sea común a las dos condiciones se saca de los if y de los else.
    

    if ( user.isCasado ) {
        if ( user.genero === 'M' ) {    //esto es un if anidado dentro de un if.
            mensaje += '. Saludos a tu mujer'
        } else {
            mensaje += '. Saludos a tu marido'
        }
    }
    return mensaje
}

function saludar(usuario){
    console.log(crearSaludo(usuario))  //así se crea el mensaje. Con crearSaludo(usuario).
}

function saludarHTML (usuario) { //crear saludo usuario en html
    document.write(crearSaludo(usuario) + '<br>')
}

saludarHTML (userMaria)
saludarHTML (userPepe)
saludar(userMaria)
saludar(userPepe)



if (1) { }
else if (2) { } //si no se cumple la primera una segunda condición.
else if (3) { }
else { }