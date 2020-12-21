// arrays al introducir nuevo ejemplar

class Libro {
    constructor(nombre,identificador, anoPublicacion, numCopias, edadReco){
        this.nombre = nombre;
        this.identificador = identificador;
        this.anoPublicacion = anoPublicacion;
        this.numCopias = numCopias;
        this.edadReco = edadReco;
        // no sé si añadir observaciones, supongo que si
    }
}

class LibroInfantil extends Libro{
    constructor(nombre,identificador, anoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, anoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}
class LibroJuvenil extends Libro{
    constructor(nombre,identificador, anoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, anoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}
class LibroAdulto extends Libro{
    constructor(nombre,identificador, anoPublicacion, numCopias, edadReco, fecha){
        super(nombre,identificador, anoPublicacion, numCopias, edadReco);
        this.fecha = fecha;
    }
}

// crear objetos además de variables donde meto los valores para rellenar obejtos
var arrayLibros = [];  // aquí dentro van los objetos-

function recogidaDatosFormulario(){

    // luego colocarlo en ultima posición p
    var nombreLibro = document.getElementById("nombreLibro").value;
    var identificador = document.getElementById("identificador").value;
    var fecha = document.getElementById("fecha").value;
    var numCopias = document.getElementById("numCopias").value;
    var edad = document.getElementById("edad").value;

    var libroMas = new Libro(nombreLibro,identificador,fecha,numCopias,edad);
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
    }

window.onload = function(){
    document.getElementById("form").addEventListener('submit',validacionesFormulario,false); 
    document.getElementById("form").addEventListener('submit',imprimirTodos,false); 
    document.getElementById("select").addEventListener("change", event =>{
        console.log("Entra dentro del select");
        creacionInputLiteratura();
        imprimir();
    },false);
    document.getElementById("form").addEventListener('submit',recogidaDatosFormulario,false);

    var idInterval=setInterval(function() {
         avisoRojo();
    }, 60000);
}

/** Impresión de datos */
function imprimir(){
    event.preventDefault();
    let valor = document.getElementById("select").value;
    var datos = JSON.parse(localStorage.getItem("miarray"));
    let div = document.getElementById("derecho");
    let p = document.createElement("p");


    if (valor == '2'){
        for(i=0; i < datos.length;i++){
            p.innerHTML += "<p> " + "Nombre del libro infantil: " + datos[i].nombre + "</p>";
            div.appendChild(p);
        }
    } else if(valor == '3') {
        for(i=0; i < datos.length;i++){
            p.innerHTML += "<p> " + "Nombre del libro juvenil: " + datos[i].nombre + "</p>";
            div.appendChild(p);
        }
    } else if(valor == '4') {
        for(i=0; i < datos.length;i++){
            p.innerHTML += "<p> " + "Nombre del libro adulto: " + datos[i].nombre + "</p>";
            div.appendChild(p);
        }
    } else {
        for(i=0; i < datos.length;i++){
            p.innerHTML += "<p> " + "Nombre de todos los libros: " + datos[i].nombre + "</p>";
            div.appendChild(p);
        }
    }
    // REALIZAR ESTRUCTURA IF ELSE Y CAMBIAR A CHANGE METODO
}

function imprimirTodos(){
    for(i=0; i < datos.length;i++){
        p.innerHTML += "<p> " + "Nombre de todos los libros: " + datos[i].nombre + "</p>";
        div.appendChild(p);
    }
}

// Función que reliza la validación del formulario
function validacionesFormulario(event){
    ventana =  window.open("./ventana.html", "pop-up", "width=500,height=300, toolbar=false, menubar=false, location=false");
    event.preventDefault();
    let todoOK= true;
    // validación nombre
    if(!document.getElementById("nombreLibro").validity.valid){
        console.log("Entra if");
        document.getElementById("nombreLibro").color= "red";
 
        todoOK= false;
        ventana.document.write("Error en el nombre" + "<br>");
        
    } else {
        console.log("Entra black");
        document.getElementById("nombreLibro").color= "black";
    }

    // validación del identificador
    if(!document.getElementById("identificador").validity.valid){
        console.log("entra if identificador");
   
        todoOK= false;
        ventana.document.write("Error en el identificador" + "<br>");
    } else {
        console.log("Entra black");
    }

    // validación de fecha
    if(!document.getElementById("fecha").validity.valid){
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
        todoOK= false;
        ventana.document.write("Error en el número de copias" + "<br>");
    } else {
        console.log(" valida numCopias");
        document.getElementById("numCopias").style.color = "black";
    }

    // validación de la edad recomendada
    if(!document.getElementById("edad").validity.valid){
        todoOK= false;
        ventana.document.write("Error en la edad" + "<br>");
    } else {
        console.log(" valida edad");
        document.getElementById("edad").style.color = "black";
    }

    // validación de observación
    if(!document.getElementById("zonaTexto").validity.valid){
        ventana.document.write("Error en las observaciones " + "<br>" );
    } else{
        console.log("error validación");
    }

     // validación de creacionInput
    if(!document.getElementById("literaturaCampo").validity.valid){
      ventana.document.write("Error en literaturaCampo " + "<br>" );
    } else{
        console.log("error validación");
    }

    return todoOK;

}

 // creación de campoMas si selecciona literatura infantil
 function creacionInputLiteratura(){
    let valor2 = document.getElementById("select").value;
    console.log("valor: " + valor2);
    let campoInput = document.getElementById("campoMas");
    // finalizar bien con otro tipo de comprobacion
    if(valor2 == '2'){
        console.log("Entra en creacionInputLiteratura()");
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
    } else {
        campoInput.innerHTML = "             ";
    }
    
 }

 // Funciones del tercer div

 function avisoRojo(){
 
        // controlar día de la semana
        let date = new Date();
        let diaSemana = date.getDay();
        console.log(diaSemana);
     
         // controlar hora
        let hora = date.getHours();
     
         // variable div
         let div = document.getElementById("abajo");

         // buscar elemento de tipo input el valor disabled
         if(diaSemana == 1){
             div.innerHTML = "Seccion de alta abierta";
        
         } else if(diaSemana == 2){
            div.innerHTML = "Seccion de alta abierta"; 
     
         } else if(diaSemana == 3){
            div.innerHTML = "Seccion de alta abierta"; 
     
         } else if(diaSemana == 4){
            div.innerHTML = "Seccion de alta abierta";
     
         } else if(diaSemana == 5){
            div.innerHTML = "Seccion de alta abierta";
     
         } else if(diaSemana == 6){
             div.innerHTML= "En días festivos no es posible dar de alta a nuevos libros.";
             document.getElementById('boton').disabled=false;
     
         } else if(diaSemana == 0){
            div.innerHTML= "En días festivos no es posible dar de alta a nuevos libros.";
             document.getElementById('boton').disabled=false;

         } else if( 9 < hora < 19) {
             div.innerHTML = "Seccion de alta abierta";
     
         } else {
             console.log("Se mete dentro de la primera condicion");
             div.innerHTML = "Esta fuera del horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00";
         }

}
