
function Point (param) {  //recibe el objeto como conjunto de parámetros.
    this.x = param.x || 0,
    this.y = param.y || 0, 
    this.r = param.r || 1,   //valores por defecto.
    this.calcularCircunferencia = function(){},
    this.calcularCirculo = function(){},
    this.calcularOtro = function(){},
    this.calcularOtroMas = function(){}

}

p1 = new Point ({x:2, y:3, r:5})

p1.calcularOtro()
p1.calcularCirculo()


function App (param) {

}
let app = new App({user: 'Pepe'})