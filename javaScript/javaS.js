// arrays al introducir nuevo ejemplar

class Libro {
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco){
        this.nombre = nombre;
        this.identificador = identificador;
        this.añoPublicacion = añoPublicacion;
        this.numCopias = numCopias;
        this.edadReco = nombedadRecore;
        this.edadReco = edadReco;
        // no sé si añadir observaciones, supongo que si
    }
}

class LibroLiteratura extends Libro{
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, añoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}

class LibroJuvenil extends Libro{
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, añoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}

class LibroAdulto extends Libro{
    constructor(nombre,identificador, añoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, añoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}
// crear objetos además de variables donde meto los valores para rellenar obejtos

// variables:

//var tipoLibro = new Array(,,);
//var nombre = new Array(,,,,);
//var identificador = new Array();
//var anoPublicacion = new Array();
//var edadRecomendada = new Array();


function rellenarObjetosArray (){
    var arrayInput = new Array();
    var inputsValues = document.getElementsByClassName("datoInput"); // ingresamos todo aquí

    nameValues =[].map.call(inputsValues,function(dataInput){
        arrayInput.push(dataInput.value);// cuando lo recorra lo va a meter aquí todo
        console.log(dataInput);
    }); // parecido al foreach, recorre todo
    arrayInput.forEach(function(inputsValuesData){
        console.log("Datos obtenidos: " +inputsValuesData); // cada vezz imprime el contenido
    });
}


// Función que recoge todos los eventos al cargar la pagina
window.onload = function(){
    let formulario = document.getElementById("form")
    

    formulario.addEventListener("submit", event=>{
        console.log("Entra dentro addEventListener para todook");
        // preguntar por qué no se mete
        let todoOk = validacionesFormulario(event);
       
        if(todoOk){
            window.open("./ventana.html", "pop-up", "width=500px height=300px");
            event.preventDefault();
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

// Funcióon que reliza la validación del formulario
function validacionesFormulario(event){
    let todoOK= true;
    // validación nombre
    let nombreLibro = document.getElementById("nombreLibro");
    if(!nombreLibro.validity.valid){
        console.log("Entra if");
        nombreLibro.style.color = "red";
        event.preventDefault();
        todoOK= false;
    } else {
        nombreLibro.style.color = "black";
    }

    // validación del identificador
    let identificador = document.getElementById("identificador");
    if(!identificador.validity.valid){
        console.log("entra if identificador");
        identificador.style.color = "red";
        event.preventDefault();   
        todoOK= false;
    } else {
        identificador.style.color = "black";
    }

    // validación de fecha
    let fecha = document.getElementById("fecha")
    if(!fecha.validity.valid){
        fecha.style.color = "red";
        event.preventDefault();
        todoOK= false;
    } else {
        fecha.style.color = "black";
    }
    // validación numero copias

    let numCopias = document.getElementById("numCopias")
    if(!numCopias.validity.valid){
        numCopias.style.color = "red";
        event.preventDefault();
        todoOK= false;
    } 
    // validación de la edad recomendada
    let edad = document.getElementById("edad");
    if(!edad.validity.valid){
        edad.style.color = "red";
        event.preventDefault();
        todoOK= false;

    }



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