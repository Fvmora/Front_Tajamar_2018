

/* Isabel
Fernando
Carlos
Felipe
Juana
Alfonso
Juan Carlos
Amadeo
Luis
Jose
Preguntar
mostrar la lista de los que vaya diciendo y no dejarle repetir. Si dice un nombre que no esta indicarselo */

//Esta mal!!!!!!!!!!


(function () {
    function app() {


        let nombres = ['Isabel', 'Fernando', 'Carlos', 'Felipe', 'Juana', 'Alfonso', 'Juan Carlos', 'Amadeo', 'Luis', 'Jose']
        let dichos = []
        let mensaje = ''
        let inpReyes = document.querySelector('#inpReyes')
        let outDichos = document.querySelector('.listaDichos')
        let buttonMandar = document.querySelector('#mandarNombre')
        let elNombre = ''
        buttonMandar.addEventListener('click', comprobar)
        let isNombre = false

        function comprobar() {
            elNombre = inpReyes.value

            if (isNombre) {
                if (existeEnDichos(elNombre)) {
                    mensaje = `lo estas repitiendo`
                    pintarMensajeError(mensaje)
                }

            } else {
                for (let i = 0; i < nombres.length; i++) {
                    if (nombres[i] === elNombre) {
                        pintarNombre(elNombre)
                        dichos.push(elNombre)

                        inpReyes.value = ''
                        document.querySelector('.mensajeError').innerHTML = ''
                        isNombre = true

                        break

                    }

                }

                mensaje = `Ese nombre no está`

                pintarMensajeError(mensaje)
            }

        }





        function pintarNombre(elNombre) {




            outDichos.innerHTML += `<p>${elNombre}</p>`


        }

        /* function dos() { */
        function pintarMensajeError(mensaje) {
            document.querySelector('.mensajeError').innerHTML =
                `<p>${mensaje}</p>`

        }
        function existeEnDichos() {

            for (let i = 0; i < dichos.length; i++) {
                if (dichos[i] === elNombre) {
                    return false


                    break

                }

            }
        }



    }
    /* } */

    window.addEventListener('load', app)
})()
