class Persona {

}
class Usuario extends Persona {
    constructor(name, apellido, clave){
        super(name, apellido) //aprovecha estas propiedades del constructor del padre.
        this.clave
    }
        //los métodos del padre los hereda el hijo.
        //Con: 
        saludar(){
        super.Saludar()  //reutilizamos el método del padre. Sin el super lo sobreescribimos.
        console.log('mi clave...')
    }
}

let us1 = new Ususario('Pepe', 'Perez', '007')

//solo hay un objeto, el objeto usuario, aunque hay dos clases.