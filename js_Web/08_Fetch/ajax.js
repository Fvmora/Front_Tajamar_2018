
function app() {

    /* document.querySelector('#btnAjax').addEventListener('click', getDatos) */

   /*  document.querySelector('#btnAjaxItem').addEventListener('click', getDatos) */

    document.querySelector('#btnAjaxBorrar').addEventListener('click', deleteDatos)

    function deleteDatos(ev) {
        let ajax = new XMLHttpRequest()  //devuelve un objeto XMLHttpRequest
        ajax.onreadystatechange = respuestaAjax
        let metodo = 'DELETE'
        let url = ''
        let item = document.querySelector('#itemB').value
        if (item) {

            url = 'http://localhost:3000/posts/' + item
        } else {
            
                return
        }

        function respuestaAjax(ev) {

            if (ajax.readyState === 4) {

                if (ajax.status === 200) {
                    let response = JSON.parse(ajax.responseText)  //en esta variable se almacenan los datos.
                    console.log(response)
                } else {
                    console.log(ajax.status) //el status 200 es que se ha encontrado.
                    console.log(ajax.statusText) //te lo dice en texto, es decir: Ok.
                }

            }
        }

        ajax.open(metodo, url)
        
        ajax.send(null)  //es como un mini submit que hacemos nosotros.
    }

}
window.addEventListener('load', app)



/* function getDatos(ev) {
    let ajax = new XMLHttpRequest()  //devuelve un objeto XMLHttpRequest
    ajax.onreadystatechange = respuestaAjax
    let metodo = 'GET'
    let url = ''
    if (ev.target.id === 'btnAjax') {

        url = 'http://localhost:3000/posts'
    } else {
        let item = document.querySelector('#item').value
        if(item){
            url = 'http://localhost:3000/posts/' + item
        } else {
            return
        }
    }

    function respuestaAjax(ev) {

        if (ajax.readyState === 4) {

            if (ajax.status === 200) {
                let response = JSON.parse(ajax.responseText)  //en esta variable se almacenan los datos.
                console.log(response)
            } else {
                console.log(ajax.status) //el status 200 es que se ha encontrado.
                console.log(ajax.statusText) //te lo dice en texto, es decir: Ok.
            }

        }
    }

    ajax.open(metodo, url)
    
    ajax.send(null)  //es como un mini submit que hacemos nosotros.
} */
