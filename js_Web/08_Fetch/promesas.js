
//Mock(maqueta) de una promesa.

function asincP (){ //esto es crear la promesa.
    return new Promise(
        (resolve, reject) => {
            
            setTimeout(
                ()=>{
                    let aletNumber = Math.random()
                    if(aletNumber < 0.7) {
                        //correcto
                        resolve(aletNumber)   //si es correcto ejecuta resolve y te pasa el resultado.
                    }else{
                        //incorrecto
                        reject(aletNumber)    //si es incorrecto ejecuta reject y te pasa el resultado.
                    }
                }, 3000)

        }) //El objeto promise espera como parámetro una function con dos parámetros: resolve y reject.
     
}

asincP().then(
    (response) => {console.log(`Todo bien gracias al ${response}`)}
)                 
.catch(      
    (response) => {console.log(`Error debido a ${response}`)}
) 