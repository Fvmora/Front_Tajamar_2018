//Por buena práctica vamos a poner en el principio del documento todos los elementos que vamos a utilizar en forma de variables, incluso hacer un objeto. 
(function () {
    function app(){
    let oDom = {
        eBotonSaludar: document.querySelector('#btnSaludar')
    }
    

    let saludo = (oE, user = 'amigo') => {  //usando ecmaScript6
        console.log(`Hola ${user}`)
    }

    oDom.eBotonSaludar.addEventListener('click', () => saludo(event, 'Pepe'))   //esta es la forma más moderna de hacerlo.
    
}

document.addEventListener('DOMContentLoaded', app) //otra forma de hacerlo.
})() 









