(function () {

    function app() {
        class Dom {
            constructor(dom1) {
                this.dom = ['linkedin', 'twiter', 'facebook', 'tumblr']
                this.domNodo = dom1
                this.redondeado = 0
                this.v
            }
            calcularAleatorio() {
                let aleatorio = Math.random() * 3
                this.redondeado = Math.round(aleatorio)
               return this.redondeado
            }
            cambiar(ev) {
                
                this.v = this.calcularAleatorio() 
                 ev.target.innerHTML = this.dom[this.v]


            }
            asignar() {
                   
                   this.domNodo[0].addEventListener('click', this.cambiar.bind(this)) //Este bind(this) le dice que coja el objeto actual, no el del evento.
                   this.domNodo[1].addEventListener('click', this.cambiar.bind(this))
                   this.domNodo[2].addEventListener('click', this.cambiar.bind(this))
                   this.domNodo[3].addEventListener('click', this.cambiar.bind(this))
                   
                    
                    
                
            }

            
        }


        let nodeList1 = document.querySelectorAll("a")
        let dom1 = new Dom(nodeList1)
        dom1.asignar()

    }
    window.addEventListener('load', app)
})()