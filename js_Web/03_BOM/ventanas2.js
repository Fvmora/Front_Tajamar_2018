

(function () {

    function app() {

        let oDom = {
            eBtnAbrir : document.querySelector('#btnAbrir'),
            eBtnCerrar : document.querySelector('#btnCerrar')                      

        }
        oDom.eBtnCerrar.disabled = 'true'
        
       

        
        oDom.eBtnAbrir.addEventListener('click', btnClick)
        oDom.eBtnCerrar.addEventListener('click', btnClick)
        
        let ventana
        let aVentanas =  []
        function btnClick(ev){   //se guarda la variable event. 
           
            switch (ev.target.id) {
                case 'btnAbrir': 
                ventana =  window.open()   //guardamos el puntero en una variable global a la function app.
               
                aVentanas.push(ventana)
                togleButtons()
                    break
                case 'btnCerrar':
                aVentanas.forEach((item) => {item.close()})   //cada item es cada puntero ventana. y se le pone la function callback para que la aplique a cada item.
                togleButtons()
                aVentanas = []  //limpiamos un array para que no se vayan acumulando las ventanas.
                    break 
            }
            
        }


       

        function togleButtons() {
            oDom.eBtnAbrir.disabled = !oDom.eBtnAbrir.disabled   //lo contrario de lo que está.
            oDom.eBtnCerrar.disabled = !oDom.eBtnCerrar.disabled
        }

    }

    window.addEventListener('load', app)

})()