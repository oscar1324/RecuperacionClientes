// arrays al introducir nuevo ejemplar

class Libro {
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco){
        this.nombre = nombre;
        this.identificador = identificador;
        this.añoPublicacion = añoPublicacion;
        this.numCopias = numCopias;
        this.edadReco = edadReco;
        // no sé si añadir observaciones, supongo que si
    }
}

class LibroInfantil extends Libro{
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, añoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}

// crear objetos además de variables donde meto los valores para rellenar obejtos
var arrayLibros = [];  // aquí dentro van los objetos-


function recogidaDatosFormulario(){

    // luego colocarlo en ultima posición p
    let nombreLibro = document.getElementById("nombreLibro").value;
    let identificador = document.getElementById("identificador").value;
    let fecha = document.getElementById("fecha").value;
    let numCopias = document.getElementById("numCopias").value;
    let edad = document.getElementById("edad").value;

    let libroMas = new Libro(nombreLibro,identificador,fecha,numCopias,edad);
    console.log(libroMas);
    
    arrayLibros = JSON.parse(localStorage.getItem("miarray") || "[]");

   /*metemos el libro en el array */


    

    arrayLibros.forEach(elemento => { 
                                    console.log(elemento.identificador);
                                    if (elemento.identificador == document.getElementById("identificador").value){
                                        console.log("coincide")
                                        
                                        elemento.numCopias ++;
                                        console.log("Lo incrementa");
                                        
                                    } else {
                                        console.log("no coincide")
                                        arrayLibros.push(libroMas);
                                    }
                                    });
                                    console.log(arrayLibros);
     if(arrayLibros.length == 0) {
         arrayLibros.push(libroMas); 
         console.log(arrayLibros);
     }     
     
    /*Almacenamos el array en el localstorage */
    localStorage.setItem("miarray", JSON.stringify(arrayLibros));

    /**
     * 
     *        for(i=0; i < arrayLibros.length; i++){
        console.log("Los identificadores: " + arrayLibros[i].identificador);
        if(idFormulario !== arrayLibros[i].identificador){
            let nombreLibro = document.getElementById("nombreLibro").value;
            let identificador = document.getElementById("identificador").value;
            let fecha = document.getElementById("fecha").value;
            let numCopias = document.getElementById("numCopias").value;
            let edad = document.getElementById("edad").value;
        
            let libroMas = new Libro(nombreLibro,identificador,fecha,numCopias,edad);
            arrayLibros.push(libroMas);
            console.log("Se ha dado de alta");
            return 1;

        } else if(idFormulario == arrayLibros[i].identificador) {
            arrayLibros[i].numCopias ++;
            return 2;
        }
       
    }
     */

    // SI LO METO DENTRO DL BUCLE NO ME RECOGE VALORES


}


/********************************************************************************** */
// Función que recoge todos los eventos al cargar la pagina
window.onload = function(){
    let formulario = document.getElementById("form")
    

    formulario.addEventListener("submit", event=>{
        event.preventDefault();
        console.log("Entra dentro addEventListener para todook");
        // preguntar por qué no se mete
        let todoOk = validacionesFormulario(event);
        console.log(todoOk);
        if(!todoOk){
            console.log("okok");
           window.open("./ventana.html", "pop-up", "width=500px height=300px");
        }
    },false);

    let select = document.getElementById("select");
    select.addEventListener("change", event =>{
        console.log("Entra dentro del select");
        creacionInputLiteratura();
    },false);


    // llamar diversos métodos
    // tooltip
    // los que sean
} 
// variable global para recoger errores
var meterErrores;
// Funcióon que reliza la validación del formulario
function validacionesFormulario(event){
    let todoOK= true;
    // validación nombre
    let nombreLibro = document.getElementById("nombreLibro").value;
    let tengoNombre = nombreLibro;
    
    if(!document.getElementById("nombreLibro").validity.valid){
        console.log("Entra if");
       // nombreLibro.style.color = "red";
        document.getElementById("nombreLibro").color= "red";
        event.preventDefault();
        todoOK= false;
        meterErrores.innerHTML += "<p>" + "Error en el nombre: " + tengoNombre + "</p>";
    } else {
       // nombreLibro.style.color = "black";
        document.getElementById("nombreLibro").color= "black";
    }

    // validación del identificador
    let identificador = document.getElementById("identificador").value;
    let tengoIdentificador = identificador;
    if(!document.getElementById("identificador").validity.valid){
        console.log("entra if identificador");
        identificador.style.color = "red";
        event.preventDefault();   
        todoOK= false;
        meterErrores.innerHTML += "<p>" + "Error en el identificador: " + tengoIdentificador + "</p>";
    } else {
        console.log(" valida fecha");
       // identificador.style.color = "black";
    }

    // validación de fecha
    let fecha = document.getElementById("fecha").value;
    let tengoFecha = fecha;
    if(!document.getElementById("fecha").validity.valid){
        fecha.style.color = "red";
        event.preventDefault();
        todoOK= false;
        meterErrores.innerHTML += "<p>" + "Error en la fecha: " + tengoFecha + "</p>";
    } else {
        console.log(" valida fecha");
        document.getElementById("fecha").style.color = "black";
     //   fecha.style.color = "black";
    }
    // validación numero copias
    /**
     * 
    let numCopias = document.getElementById("numCopias").value;
    let tengonumCopias = numCopias;
    if(!numCopias.validity.valid){
        numCopias.style.color = "red";
        event.preventDefault();
        todoOK= false;
        console.log("no valida numCopias");
        meterErrores.innerHTML += "<p>" + "Error en la fecha: " + tengonumCopias + "</p>";
    } else {
        console.log(" valida numCopias");
        numCopias.style.color = "black";
    }
    // validación de la edad recomendada
    let edad = document.getElementById("edad").value;
    let tengoEdad = edad;
    if(!edad.validity.valid){
        edad.style.color = "red";
        event.preventDefault();
        todoOK= false;
        console.log("no valida edad");
        meterErrores.innerHTML += "<p>" + "Error en la edad: " + tengoEdad + "</p>";
    } else {
        console.log(" valida edad");
        edad.style.color = "black";
    }

     * 
     */
    return todoOK;

    /**
     * 
     *     // validación de observación
    let observacion = document.getElementById("zonaTexto");
    if(!edad.validity.valid){
        event.preventDefault();
    } else{
        console.log("error validación");
    }

     */
}

 // creación de campoMas si selecciona literatura infantil
 function creacionInputLiteratura(){
    let valor2 = document.getElementById("valor2").value;
    console.log(valor2);
    // finalizar bien con otro tipo de comprobacion
    if(valor2 == 2){
        console.log("Entra en creacionInputLiteratura()");
        let campoInput = document.getElementById("campoMas");
        let labelCampo = document.createElement("label");
        let campo = document.createElement("input");
      
        campoInput.appendChild(labelCampo);
        campoInput.appendChild(campo);
        labelCampo.innerHTML = "Literatura infantil: ";
        labelCampo.setAttribute("id","labelLiteratura");
        labelCampo.setAttribute("for","literaturaCampo");
        campo.setAttribute("id","literaturaCampo");
        campo.setAttribute("name","literaturaCampo");
        campo.setAttribute("type","text");
        campo.setAttribute("required","");
    } 
    
 }

 // funcion que recoge listener  ¿Pensando que hacer?


 // Funciones del tercer div

 function avisoRojo(){

    let date = new Date();
    let diaSemana = date.getDay();

    // controlar día de la semana
    if(diaSemana == 6,7 ){
        alert("Estas dentro de la jornada laboral")
        
    } else {
        alert("En días festivos no es posible dar de alta a nuevos lirbos.")
        // boton de formulario desactivar
        document.getElementById('boton').disabled=false;
    }

    // controlar hora
    let hora = date.getHours();
    let horaComienzo = '9:00';
    let horaFinal = '19:00';

    // comprobar hora y fehca cada segundo con timeso
    if(horaComienzo < hora> horaFinal){
        alert("Sección abierta");
        document.getElementById('boton').disabled=true;
    } else{
        alert("Esta fuera del horario. Solo es posible dar de alta libro");
    }

    let mensajeHora = function(segundo){
        alert('Tiemout que se ejecuta pasados ' + segundos +'segundos');

    }
    let idTimeout = setTimeout(mensajeHora,3000); // algo parecido

    //alert("Meter contenido más variables");
    // ese aviso que quiero meter con letras es una variable modificando tamaño, etc
    // if(date.getDay() == 3){ alert("dentro del dia")} else {"Es fin de semana"}

 }