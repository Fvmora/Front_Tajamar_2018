//Por buena práctica vamos a poner en el principio del documento todos los elementos que vamos a utilizar en forma de variables, incluso hacer un objeto. 
(function () {

    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector('#btnSaludar'),
            eBotonBorrar: document.querySelector('#btnBorrar'),
            eInputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludo')
        }



        //Manejador del evento click del boton #btnSaludar

        let saludar = () => {
            let user = oDom.eInputName.value   //recogemos el value que escribe el usuario.

            oDom.eOutSaludo.innerHTML = `<p>Hola ${user}<p>`  //lo escribimos en el sitio que queremos.
        }

        let borrar = () => {
            oDom.eInputName.value = ''
            oDom.eOutSaludo.innerHTML = ''
        }

        oDom.eBotonSaludar.addEventListener('click', saludar)
        oDom.eBotonBorrar.addEventListener('click', borrar)

    }

    document.addEventListener('DOMContentLoaded', app)
})()


//MVC Modelo vista controlador. Es el paradigma fundamental de programación actual.
/* Tengo una vista que interactúa con el usuario, un modelo donde guardo los datos y un controlador. El controlador y el modelo 
es javascript y la vista es el HTML. El modelo es el conjunto de datos que manejamos. En la vista entran datos y salen datos. Y el controlador coge los 
datos de la vista, los procesa y saca otros datos.*/









