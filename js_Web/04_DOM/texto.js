

(function(){

    function app(){
        let span = document.querySelector('#spa')
        let button = document.querySelector('#button')

        function addClase() {
            
            span.classList.toggle("new")
        }
        button.addEventListener('click', addClase)

        

    }



    window.addEventListener('load', app)
})()