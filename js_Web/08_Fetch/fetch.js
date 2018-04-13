function app () {

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

    function getDatos() {
        let metodo = 'GET'
        let url = 'http://localhost:3000/posts'
        fetch(url)
        .then(response => response.json()) //esto recibe los datos ya parseados. Las arrow function retornan algo por defecto si es una sola línea de código.
        .then(data => console.log(data)) //recogemos los datos y los mostramos.
    }
}

window.addEventListener('load', app, false)