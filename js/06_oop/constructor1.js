function Libro (a = '',b = '',c = '',d = new Date(0) ,e = []) {
    this.autor = a,      
    this.titulo = b,
    this.editorial = c,
    this.fecha = d,
    this.generos = e,
    this.mostrarReferencia = function() {
        let ref = this.autor + ', '
        ref += this.titulo + ', '
        ref += this.editorial + ', '
        ref += this.fecha.getFullYear() + ', '
        ref += this.generos[0] + '.'
        console.log(ref)
        }   
}

let libro3 = new Libro('William Gibson', 'Neuromante', 'Minotauro', new Date('1980'), ['Fantasía'])

console.log(libro3.mostrarReferencia())