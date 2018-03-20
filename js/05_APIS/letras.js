/**
 * @function : comprobar si la cadena es:
 * -    todo mayusculas(1)
 * -    todo minúsculas(2)
 * -    mezcla de ambos(0)
 * @param : string
 * @returns : number
 */


posibilidades = {
    cadena : '',
     posibil : [
        ` es mezcla de ambos`,
        ` está en mayúsculas`,
        ` está en minúsculas`
    ],
    comparacion : function () {   //es darle un valor por defecto al parámetro cadena.
        let n = 0  //si fueramos a multiplicar lo inicializariamos con un 1.
        if (this.cadena === this.cadena.toUpperCase()) {
            n = 1
        } else if (this.cadena === this.cadena.toLowerCase()) {
            n = 2
        }
        //si primero lo hago 0 y no se ha convertido en 1 ni 2 es que es 0.Porque sólo hay 3 posibilidades.
        return n
    },
    mostrarN : function () {

        console.log(`La cadena comparacion `, this.posibil[this.comparacion()])
    }

}

posibilidades.cadena = 'HOLA PEPE'
posibilidades.mostrarN()
posibilidades.cadena = 'hola pepe'
posibilidades.mostrarN()
posibilidades.cadena = 'HOLA pepe'
posibilidades.mostrarN()
