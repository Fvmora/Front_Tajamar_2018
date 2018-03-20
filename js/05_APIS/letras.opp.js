/**
 * @function : comprobar si la cadena es:
 * -    todo mayusculas(1)
 * -    todo minúsculas(2)
 * -    mezcla de ambos(0)
 * @param : string
 * @returns : number
 */

(function(){
appMayusculas = {
    cadena : '',
    aMensajes : [
        'se mezclan Mayusc y Minus',
        'todas son Mayusculas',
        'todas son minusculas'
        ] ,

    comprobarMayusculas : function (){
        let r = 0
        if(this.cadena.toUpperCase() === this.cadena){
            r = 1
        }else if (this.cadena.toLowerCase() === this.cadena){
            r = 2
        }
        return r
    },
    mostrar : function() {
        let sMensaje = `
        En la frase "${this.cadena}"
        ${this.aMensajes[this.comprobarMayusculas(this.cadena)]}`
        console.log(sMensaje)
    }
}
appMayusculas.cadena = 'Hola Pepe'
appMayusculas.mostrar()
})()  //clousure para encapsular la funcion



