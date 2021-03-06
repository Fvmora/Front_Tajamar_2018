
export class Formulario {    //exportamos la clase
    constructor() {  //el constructor debe ser los más pequeño posible. Inicializa variables o dispara métodos.
        this.datos = {       //como es un objetoJSON, no un fichero JSON, las propiedades pueden ir sin ''.
            nombre: '',
            apellido: '',
            fechaNacim: '',
            email: '',
            password: '',
            datos: '',
            isOk: 'false',  //los checkbox no deben estar marcados al inicio por ley.
            isOk2: 'false',
            turno: '',
            cursos: {},
            asignatura: ''
        }
        
        this.x = []
        this.index = 0
        this.y = []

        this.aSelectAsignaturas = {
            desarrollo_front: ['HTML5', 'CSS3', 'Javascript'],
            diseño_web: ['UI', 'HTML'],
            bases_datos: ['SQL', 'MongoDB', 'Oracle']
        }

        this.accederDom()  //disparamos el método.
        this.definirManejadores() //disparamos el método   El constructor se convierte en un controlador.
        /* this.pintarAsignaturas(this.domSelectCurso) */

    }
    accederDom() {
        this.domFormulario = document.querySelector('form')
        this.domBtnSaludar = document.querySelector('#btnSaludar')
        //this.domBtnEnviar = document.querySelector('#btnSubmit')
        //this.domBtnBorrar = document.querySelector('#btnBorrar')
        this.domInpNombre = document.querySelector('#nombre')
        this.domInpApellido = document.querySelector('#apellido')
        this.domInpFecha = document.querySelector('#fecha')
        this.domInpEmail = document.querySelector('#mail')
        this.domInpPassword = document.querySelector('#contraseña')
        this.domAreaDatos = document.querySelector('#datos')
        this.domRadioTurno = document.querySelectorAll('[name="turno"]') //recogemos el array nodelist accediendo a los name de los radiobuton.
        this.domCbxIsOk = document.querySelector('#isOk')
        this.domCbxIsOk2 = document.querySelector('#isOk2')
        this.domSelectCurso = document.querySelector('#cursos')
        this.domDivAsignaturas = document.querySelector('#asignaturas')
       /*  if(document.querySelector('#asig')){
        this.domSelectAsig = document.querySelector('#asig')}  */
        this.domDivResultados = document.querySelector('#resultados')

    }
    accederDomAsig() {
        if (document.querySelector('#asig')) {
            this.domSelectAsig = document.querySelectorAll('.options')
        }
    }
    
    definirManejadorDinamico(){
        
        /* this.domSelectAsig.addEventListener('change', this.procesarSelectAsignaturas.bind(this)) */
        for(let i = 0; i <this.domSelectAsig.length; i++ ){
       
           
            this.domSelectAsig[i].addEventListener('click', this.procesarSelectAsignaturas.bind(this))
            console.log(this.domSelectAsig[i])
        }
        
        
    }
    definirManejadores() {
        this.domBtnSaludar.addEventListener('click', this.saludar.bind(this))
        this.domFormulario.addEventListener('submit', this.enviar.bind(this))  //el método enviar lo desencadena el submit.
        //this.domBtnBorrar.addEventListener('click', this.borrar.bind(this))
        this.domSelectCurso.addEventListener('change', this.pintarAsignaturas.bind(this), true)
        /* if(document.querySelector('#asig')){ */
        /* }  */

        }

    saludar() {
        console.log(this.domSelectCurso.options)

    }
    pintarAsignaturas(ev) {

        let index = ev.target.selectedIndex
        let asig = ''


        if (this.domSelectCurso.options[index].value) this.domSelectCurso.firstElementChild.classList.add('oculto')

        switch (this.domSelectCurso.options[index].value) {
            case 'front':
                this.x = this.aSelectAsignaturas.desarrollo_front
                break
            case 'web':
                this.x = this.aSelectAsignaturas.diseño_web
                break
            case 'sql':
                this.x = this.aSelectAsignaturas.bases_datos
                break
        }

        asig = ` <select name="asignaturas" id="asig" multiple>`
        for (let i = 0; i < this.x.length; i++) {
            if (this.x[i] === this.x[-1]) {
                asig += `       
            <option  selected></option>          
            `
               
            } else {
                asig += `       
            <option value="${this.x[i]}" class="options">${this.x[i]}</option>          
            `
            }
        }
        asig += `</select>`


        this.domDivAsignaturas.innerHTML = asig
        
        this.accederDomAsig()
        this.definirManejadorDinamico()

       
        

    }
    enviar(oe) {
        try {
            this._recogerDatos()
        }
        catch (error) {
            console.log(error)
        }
        this._presentarDatos()
        oe.preventDefault() //esto es para simular el envío.

    }
    _recogerDatos() {

        this.datos.nombre = this.domInpNombre.value
        this.datos.apellido = this.domInpApellido.value
        this.datos.fechaNacim = new Date(this.domInpFecha.value)
        this.datos.email = this.domInpEmail.value
        this.datos.password = this.domInpPassword.value
        this.datos.datos = this.domAreaDatos.value
        this.datos.turno = this.procesarRadio(this.domRadioTurno)  //procesamos los radiobutton
        this.datos.isOk = this.domCbxIsOk.checked  //los checkbox
        this.datos.isOk2 = this.domCbxIsOk2.checked  //guardamos un booleano en los checkbox.
        this.datos.cursos = this.procesarSelect(this.domSelectCurso)       //los select contienen dos propiedades selectedIndex y el array options.Después se recoge el value o el text. 
        /* if(document.querySelector('#asig')){
        this.datos.asignatura = this.procesarSelectAsignaturas(this.domSelectAsig)} */

    }
    procesarRadio(nodo) {
        let valueRadio
        nodo.forEach(item => {
            if (item.checked) {  //la propiedad cheked devuelve true o false.
                valueRadio = item.value
                //no admite un break porque los forEach no los admiten, para eso estan los every.Pero no van con los nodelist.

            }
        })

        return valueRadio

    }
    procesarSelect(nodo) {
        let index = nodo.selectedIndex


        return {       //pasamos un objeto con todos los datos.
            code: nodo.options[index].value, //el value es el valor que le hemos dado nosotros en html.
            text: nodo.options[index].text  //también valdría textContent, es el texto del nodo.
        }


    }
    procesarSelectAsignaturas(ev) {
       
        console.log(ev)
        
        let xx = this.x

        
        
            xx.forEach(item => {
                if (item === ev.target.textContent) { this.y.push(item) }
              
            })
        
        this.datos.asignatura = this.y.join(' , ')
        
    }
    _presentarDatos() {
        let resultadoHTML =
            `<h2>Resultados</h2>
        <ul> 
        <li>Nombre: ${this.datos.nombre}</li>
        <li>Apellido: ${this.datos.apellido}</li>
        <li>Fecha de nacimiento: ${this.datos.fechaNacim}</li>
        <li>e-mail: ${this.datos.email}</li>
        <li>Contraseña: ${this.datos.password}</li>
        <li>Datos Extra: ${this.datos.datos}</li>
        <li>Aceptadas condiciones: ${this.datos.isOk ? 'Si' : 'No'}</li>
        <li>Aceptadas condiciones 2: ${ this.datos.isOk2 ? 'Si' : 'No'}</li>
        <li>Turno: ${this.datos.turno}</li>
        <li>Curso: ${this.datos.cursos.text}</li>
        <li>Asignatura: ${this.datos.asignatura}</li>
        </ul>
    
        `
        this.domDivResultados.innerHTML = resultadoHTML

    }
}
