function app() {

    let ajax

    document.querySelector('#btnAjax').addEventListener('click', getDatos)

    document.querySelector('#btnAjaxItem').addEventListener('click', getDatos)

    document.querySelector('#btnAjaxBorrar').addEventListener('click', deleteDatos)

    document.querySelector('#btnAjaxAdd').addEventListener('click', postDatos)

    document.querySelector('#btnAjaxModif').addEventListener('click', putDatos)

    function getDatos(ev) {
        let metodo = 'GET'
        let url = ''
        if (ev.target.id === 'btnAjax') {
            url = 'http://localhost:3000/posts'
        } else {
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts/' + item
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
            url = 'http://localhost:3000/posts/' + item
        } else {
            return
        }
        conectar(metodo, url, null, stateChange)

    }

    function postDatos(ev) {
        let data = {
            title: "El Señor de los Anillos",
            author: "JRR Tolkien"
        }
        let metodo = 'POST'
        let url = 'http://localhost:3000/posts'
        conectar(metodo, url, JSON.stringify(data), stateChange)
    }

    function putDatos(ev) {
        let data = {
            title: "Neuromante",
            author: "William Gibson"
        }
        let metodo = 'PUT'
        let url = ''
        let item = document.querySelector('#itemM').value
        if (item) {
            url = 'http://localhost:3000/posts/' + item
        } else {
            return
        }
        let datos = JSON.stringify(data)
        
        conectar(metodo, url, datos, stateChange)
    }
}

function stateChange() {
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            let response = JSON.parse(ajax.responseText)
            console.dir(response)
        } else {
            alert(ajax.status)
            alert(ajax.statusText)
        }
    }
}


function conectar(metodo, url, data, funcion) {
    ajax = new XMLHttpRequest()
    ajax.onreadystatechange = funcion
    ajax.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
   
    ajax.open(metodo, url)
    ajax.send(data)
}

window.addEventListener('load', app)