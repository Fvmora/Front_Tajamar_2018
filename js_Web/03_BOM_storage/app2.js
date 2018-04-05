(function () {
    function app() {  //es la función aplicación, todo está dentro de esta function.

        
        let eNombre = document.querySelector('#inpNombre')
        let eApellido = document.querySelector('#inpApellido')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')


        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar() {
            let persona = {
                nombre : eNombre.value,
                apellido : eApellido.value
            }
           
            localStorage.setItem('persona', JSON.stringify(persona)) //como persona es un objeto, no un string, hay que hacer un JSON.Stringify(), ya que el localStorage solo guarda strings.
            saludar()
        }
        function borrar(){
            localStorage.removeItem('persona')  //key
            eSaludo.innerHTML = ''
            eNombre.value = ''
            eApellido.value = ''
        }

        function saludar() {
            let persona = localStorage.getItem('persona')  //le pasamos un objeto stringifado.
            persona = JSON.parse(persona)   //recibimos un string, para trabajar con él tenemos que parsearlo y convertirlo en un objeto.

             if(persona.nombre || persona.apellido) {
                eSaludo.innerHTML = `Hola ${persona.nombre} ${persona.apellido}`
            } 
        
       
        }
        saludar()

    }
    window.addEventListener('load', app)
})()