
$(function(){
    let oDom = {
        eBotonSaludar: $('#btnSaludar'),
        eBotonBorrar: $('#btnBorrar'),
        eInputName: $('#inpName'),
        eOutSaludo: $('#outSaludo')
    }

    function saludar() {
        let user = oDom.eInputName.val()  //todas las propiedades se convierten en métodos. value en val().
        oDom.eOutSaludo.html(`<p>Hola ${user}`)
    }
    function borrar() {
        oDom.eInputName.val('')
        oDom.eOutSaludo.html('')
    }
    oDom.eBotonSaludar.on('click', saludar)
    oDom.eBotonBorrar.on('click', borrar)


})

