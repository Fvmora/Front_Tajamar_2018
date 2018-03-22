class Persona {
    constructor (nombre, fecha, altura){
        this.nombre = nombre
        this.fechaNacim = fecha
        this.altura = altura
    }
    _calcularAños() {      //por convenio se pone _ a los elementos privados(no se deberían usar desde fuera).
        let hoy = new Date()
        return parseInt((hoy - this.fechaNacim)/(1000*60*60*24*365))
         
    }
    saludar() {
        
        console.log(`Hola soy ${this.nombre}
        y tengo ${this._calcularAños()}`)
    }
}

let persona1 = new Persona('Pepe', new Date(1999, 3, 3), 1.60)
persona1.saludar()


class Alumno extends Persona {  //reune todas las propiedades de Persona pero además puede tener otras distintas.
                                //Alumnos es una extensión de Persona.
                                //Las class, sus nombre se ponen en singular.
        constructor(nombre, fecha, altura, aula, equipo){
            super(nombre, fecha, altura)             //super() es la llamada al constructor de su padre.
            this.aula = aula
            this.equipo = equipo
        }

        saludar() {
            super.saludar()   //se llama a un método del constructor padre.
            console.log(`Soy del equipo ${this.equipo}`)
        }
}

let alumno1 = new Alumno('Juan', new Date(1995, 3, 3), 1.60, 'T22', 'Delta')
alumno1.saludar()
