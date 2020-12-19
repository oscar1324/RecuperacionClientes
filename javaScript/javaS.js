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

/**
 * // Función que recoge todos los eventos al cargar la pagina
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
    // llamar diversos métodos
    // tooltip
    // los que sean
} 

 * 
 */
window.onload = function(){
    document.getElementById("form").addEventListener('submit',validacionesFormulario,false); 
    document.getElementById("form").addEventListener('submit',imprimir,false); 
    document.getElementById("form").addEventListener('submit',avisoRojo,false);
    document.getElementById("select").addEventListener("change", event =>{
        console.log("Entra dentro del select");
        creacionInputLiteratura();
    },false);
}




/** Impresión de datos */
function imprimir(){
    let divEscribir;
    let contenidoFinal = " ";

    divEscribir = document.getElementById("contenidoCentral");

    for(i=0; i < arrayLibros.length;i++){
        //contenidoFinal += "<p>" +
        console.log(arrayLibros[i]); 
    }
}






// Función que reliza la validación del formulario
function validacionesFormulario(event){
    ventana =  window.open("./ventana.html", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    
    let todoOK= true;
    // validación nombre
    if(!document.getElementById("nombreLibro").validity.valid){
        console.log("Entra if");
        document.getElementById("nombreLibro").color= "red";
        event.preventDefault();
        todoOK= false;
       ventana.document.write("Error en el nombre" + "<br>");
        
    } else {
        console.log("Entra black");
        document.getElementById("nombreLibro").color= "black";
    }

    // validación del identificador
    if(!document.getElementById("identificador").validity.valid){
        console.log("entra if identificador");
        event.preventDefault();   
        todoOK= false;
        ventana.document.write("Error en el identificador" + "<br>");
    } else {
        console.log("Entra black");
    }

    // validación de fecha
    if(!document.getElementById("fecha").validity.valid){
        event.preventDefault();
        todoOK= false;
        var hoy = new Date();
        if(!document.getElementById("fecha").value > hoy){
            console.log("Entra en if fecha");
            event.preventDefault();
            ventana.document.write("Error en las observaciones " + "<br>" );
        } 
        ventana.document.write("Error en la fecha" + "<br>");
    } else {
        console.log(" valida fecha");
        document.getElementById("fecha").style.color = "black";
     //   fecha.style.color = "black";
    }

    // validación numero copias
    if(!document.getElementById("numCopias").validity.valid){
        event.preventDefault();
        todoOK= false;
        ventana.document.write("Error en el número de copias" + "<br>");
    } else {
        console.log(" valida numCopias");
        document.getElementById("numCopias").style.color = "black";
    }

    // validación de la edad recomendada
    if(!document.getElementById("edad").validity.valid){
        event.preventDefault();
        todoOK= false;
        ventana.document.write("Error en la edad" + "<br>");
    } else {
        console.log(" valida edad");
        document.getElementById("edad").style.color = "black";
    }

    // validación de observación
    if(!document.getElementById("zonaTexto").validity.valid){
        event.preventDefault();
        ventana.document.write("Error en las observaciones " + "<br>" );
    } else{
        console.log("error validación");
    }

     // validación de creacionInput
    if(!document.getElementById("literaturaCampo").validity.valid){
     event.preventDefault();
      ventana.document.write("Error en literaturaCampo " + "<br>" );
    } else{
        console.log("error validación");
    }

    return todoOK;

}

 // creación de campoMas si selecciona literatura infantil
 function creacionInputLiteratura(){
    let valor2 = document.getElementById("valor2").value;
    let valor3 = document.getElementById("valor3").value;
    let valor4 = document.getElementById("valor4").value;
    console.log("valor: " + valor2);
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

 // Funciones del tercer div

 function avisoRojo(){

    // controlar día de la semana
    let date = new Date();
   let diaSemana = date.getDay();

    // controlar hora
    let idInterval=setInterval(function() {
        let date = new Date();
        let hora = date.getHours();
         console.log(hora);
    }, 60000);

    // variable div
    let div = document.getElementById("abajo");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    
    if((diaSemana == 6,7) ){
        p1.innerHTML= "En días festivos no es posible dar de alta a nuevos libros.";
        div.appendChild(p1);
        document.getElementById('boton').disabled=false;

    } else if( 9 < idInterval < 19) {
        p2.innerHTML = "Seccion de alta abierta";
        div.appendChild(p2);
        document.getElementById('boton').disabled=true;

    } else {
        p2.innerHTML = "Esta fuera del horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00";
        div.appendChild(p3);
    }


}
