

(function () {

    function app() {

        let oDom = {
            eBtnAbrir : document.querySelector('#btnAbrir'),
            eBtnCerrar : document.querySelector('#btnCerrar'),
            eBtnGoogle : document.querySelector('#btnGoogle')                     

        }
        
        
       

        
        oDom.eBtnAbrir.addEventListener('click', btnAbrir)
        oDom.eBtnCerrar.addEventListener('click', btnCerrar)
        oDom.eBtnGoogle.addEventListener('click', btnGoogle)
        
        let ventana
        let aVentanas = []
        function btnAbrir(){  //las funciones manejadoras de eventos no retornan nada, son void. 

            ventana =  window.open()   //guardamos el puntero en una variable global a la function app.
            
            aVentanas.push(ventana)
            
            
          
        }
        function btnGoogle(){  //las funciones manejadoras de eventos no retornan nada, son void. 

            ventana =  window.open('http://pruebasfer.online',"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400")   //guardamos el puntero en una variable global a la function app.
            
            aVentanas.push(ventana)
            
            
          
        }

        
        function btnCerrar() {
            
            aVentanas.forEach((item) => {item.close()})   //cada item es cada puntero ventana. y se le pone la function callback para que la aplique a cada item.
            
            aVentanas = []  //limpiamos un array para que no se vayan acumulando las ventanas.
                
        }

       

    }

    window.addEventListener('load', app)

})()