

(function () {

    function app() {

        let oDom = {
            eBtnAbrir : document.querySelector('#btnAbrir'),
            eBtnCerrar : document.querySelector('#btnCerrar')                      

        }
        oDom.eBtnCerrar.disabled = 'true'
        
       

        
        oDom.eBtnAbrir.addEventListener('click', btnAbrir)
        oDom.eBtnCerrar.addEventListener('click', btnCerrar)
        
        let ventana
        let aVentanas = []
        function btnAbrir(){  //las funciones manejadoras de eventos no retornan nada, son void. 

            ventana =  window.open()   //guardamos el puntero en una variable global a la function app.
            togleButtons()
            aVentanas.push(ventana)
            
            
          
        }
        function btnCerrar() {
            
            aVentanas.forEach((item) => {item.close()})   //cada item es cada puntero ventana. y se le pone la function callback para que la aplique a cada item.
            togleButtons()
            aVentanas = []  //limpiamos un array para que no se vayan acumulando las ventanas.
                
        }

        function togleButtons() {
            oDom.eBtnAbrir.disabled = !oDom.eBtnAbrir.disabled   //lo contrario de lo que está.
            oDom.eBtnCerrar.disabled = !oDom.eBtnCerrar.disabled
        }

    }

    window.addEventListener('load', app)

})()