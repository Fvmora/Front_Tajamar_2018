function Factura (InfoEmpresa1, InfoCliente1, ListaProductos1 = []) {
    this.empresa = InfoEmpresa1,
    this.cliente = InfoCliente1, 
    this.productos = ListaProductos1,
    
    this.importeTotal = () => {
          let total = 0
       for(i = 0; i < this.productos.productos11.length; i++) {
          total += this.productos.productos11[i].precio
         
       }
       
       return total
       
    },
    this.iva = function () {
        let total = this.importeTotal();
        let elIva =  (total * 21) / 100
        
      
        let total_sin_Iva =  total - elIva

        return total_sin_Iva
      
    },
    this.mostrar = () => {console.log(this.iva())}   
    
   
}





function InfoEmpresa (nombre, direccion, tlfn, nif){
    this.nombre_emp = nombre,
    this.direccion_emp = direccion, 
    this.tlfn_emp = tlfn,
    this.nif_emp = nif
}

function InfoCliente (nombre, direccion, tlfn, nif){
    this.nombre_cli = nombre,
    this.direccion_cli = direccion, 
    this.tlfn_cli = tlfn,
    this.nif_cli = nif
} 

function ListaProductos (productos){
    this.productos11 = productos
}

let InfoEmpresa1 = new InfoEmpresa('Everis', 'c/albarracín', 916587458, 36547891)
let InfoCliente1 = new InfoCliente('Pepe', 'c/hilados', 916754070, '53015847-W')
let ListaProductos1 = new ListaProductos(
    productos = [
    producto1 = {
        descripcion : 'leche',
        precio : 5,
        cantidad : 3
    },
    producto2 = {
        descripcion : 'Mantequilla',
        precio : 5,
        cantidad : 6
    },
    producto3 = {
        descripcion : 'Mermelada',
        precio : 5,
        cantidad : 2
    }
]
)
let Factura1 = new Factura(InfoEmpresa1, InfoCliente1, ListaProductos1)



Factura1.mostrar()
