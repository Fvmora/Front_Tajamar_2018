(function () {
    function app() {  //es la función aplicación, todo está dentro de esta function.

        let eNombre = document.querySelector('#inpNombre')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')


        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar)

        function guardar() {
            let nombre = eNombre.value
            localStorage.setItem('nombre', nombre) //key y valor (strings)
            saludar()
        }
        function borrar(){
            localStorage.removeItem('nombre')  //key
            eSaludo.innerHTML = ''
            eNombre.value = ''
        }

        function saludar() {
            let nombre = localStorage.getItem('nombre')  //key
            if(nombre) {
                eSaludo.innerHTML = `Hola ${nombre}`
            }
        
       
        }
        saludar()

    }
    window.addEventListener('load', app)
})()