//una sola vez en el tiempo cuando yo quiera.

/* let idT = setTimeout(algo, 1000)   */     //la función es un callback, se ejecuta asincrónicamente. Ambos devuelven un puntero que permite para el proceso.

/* clearTimeout(idT) */


//se ejecutara n veces, cada cierto tiempo.



(function () {
    function app() {
        let aBotones = document.querySelectorAll('button')   //creamos un array utilizando los button.Esto se hace para que un mismo manejador de eventos funcione para todos los botones.


        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)  //tengo el click de cada uno de los botones asociados a una función, ahora se pone un switch(o con if) para que haga una cosa en función del boton que sea.
        })
        
        let crono = 0
        let idI
        let eCrono = document.querySelector('.crono')
        aBotones[1].disabled = true
        aBotones[2].disabled = true

        function btnClick(ev) {
            if (ev.target.id === 'btnIniciar') {
                idI = setInterval(function () {
                    aBotones[0].disabled = true
                    aBotones[0].textContent = 'Continuar'
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)   //con cuantos decimales saldrá.
                    
                    aBotones[1].disabled = false
                    aBotones[2].disabled = true
                   
                }
                    , 100)



            } else if (ev.target.id === 'btnParar') {
                clearInterval(idI)
                aBotones[0].disabled = false
                aBotones[1].disabled = true
                aBotones[2].disabled = false
            } else {
                crono = 0
                eCrono.innerHTML = crono.toFixed(2)
                aBotones[0].disabled = false
                aBotones[0].textContent = 'Iniciar'
                aBotones[1].disabled = true
                aBotones[2].disabled = true
            }
        }



    }
    window.addEventListener('load', app)

})()