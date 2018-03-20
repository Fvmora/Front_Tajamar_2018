/**
 * @function : comprobar si la cadena es:
 * -    todo mayusculas(1)
 * -    todo minúsculas(2)
 * -    mezcla de ambos(0)
 * @param : string
 * @returns : number
 */


appMayusculas = {
    cadena: '',
    codigo: 0,
    aMensajes: [
        'se mezclan Mayusc y Minus',
        'todas son Mayusculas',
        'todas son minusculas'
    ],
    aCadenas: [
        'HOLA PEPE',
        'hola pepe',
        'Hola Pepe'
    ],

    comprobarMayusculas: function () {

        if (this.cadena.toUpperCase() === this.cadena) {
            this.codigo = 1
        } else if (this.cadena.toLowerCase() === this.cadena) {
            this.codigo = 2
        } else {
            this.codigo = 0
        }

    },
    mostrar: function () {
        this.comprobarMayusculas()
        let sMensaje = `
        En la frase "${this.cadena}"
        ${this.aMensajes[this.codigo]}`
        console.log(sMensaje)
    },
    probar: function (){
        for (i = 0; i < this.aCadenas.length; i++) {
            this.cadena = this.aCadenas[i];
            this.mostrar()
        }
    }
}


appMayusculas.probar()



