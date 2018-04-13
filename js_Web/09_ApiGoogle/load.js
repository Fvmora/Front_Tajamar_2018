
function app(){

    document.querySelector('#book').addEventListener('input', getDatos)
    let titles = []
        function getDatos() {
            titles = []
            document.querySelector('#datos').innerHTML = ''
            let clave = document.querySelector('#book').value
            let metodo = 'GET'
            let url = 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + clave

            fetch(url)
            .then(response=>{
                
                return response.json()
            }

            ).then(data => {
               
                
                for(let i = 0; i < data.items.length; i++){
                titles.push(data.items[i].volumeInfo.title)  
            }
            
            presentarDatos(titles)
            })
            
        }
        
        function presentarDatos(titles) {  
            
            document.querySelector('#datos').textContent = titles.join(', ')
        }
}

window.addEventListener('load', app)