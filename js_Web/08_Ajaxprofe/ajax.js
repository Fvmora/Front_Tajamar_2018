function app() {

    let ajax

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

    document.querySelector("#btnAjaxItem")
    .addEventListener('click', getDatos)

    document.querySelector("#btnAjaxBorrar")
    .addEventListener('click', deleteDatos)
    
    document.querySelector("#btnAjaxAdd")
    .addEventListener('click', postDatos) // Añadir

    document.querySelector("#btnAjaxModif")
    .addEventListener('click', putDatos) //Modif

    function getDatos(ev) {
        let metodo = 'GET'
        let url = ''
        if (ev.target.id == 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else { // ev.target.id == 'btnAjaxItem'
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts/'+item
            } else {
                return
            }
        }
        
        conectar(metodo, url, null, stateChange)   
    }

    function deleteDatos(ev) {
        let metodo = 'DELETE'
        let url = ''
        let item = document.querySelector('#itemB').value
        if (item) {
            url = 'http://localhost:3000/posts/'+item
        } else {
            return
        }
        conectar(metodo, url, null, stateChange)
    } 

    function postDatos () {
        let data = {
            title: "Nuevo post",
            author: "Fernando"}
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        conectar(metodo, url, JSON.stringify(data), stateChange)
    }

    function putDatos(ev) {
        let data = {
            title: "Neuromante",
            author: "William Gibson"}
        let metodo = 'PUT'
        let url = ''
        let item = document.querySelector('#itemM').value
        if (item) {
            url = 'http://localhost:3000/posts/'+item
        } else {
            return
        }
        conectar(metodo, url, JSON.stringify(data), stateChange)      
    }

    function stateChange () {
        console.log("Cambio de estado")
        console.log(ajax.readyState)
        if (ajax.readyState === 4) {
            console.log("Comunicación OK")
            if(ajax.status === 200) {
                let response = JSON.parse(ajax.responseText)
                console.dir(response)
            } else {
                console.log(ajax.status)
                console.log(ajax.statusText)
            }
        }
    }

    function conectar(metodo, url, data, funcion) {
        ajax = new XMLHttpRequest()
        ajax.onreadystatechange = funcion

        ajax.open(metodo, url)
        ajax.setRequestHeader('Content-Type', 'application/json')
        ajax.setRequestHeader( 'Accept','application/json')
    
        
        console.log(data)
        ajax.send(data)

    }
}
window.addEventListener('load', app, false)