// Función que recoge todos los eventos al cargar la pagina
window.onload = function(){
    let formulario = document.getElementById("form")
    

    formulario.addEventListener("submit", event=>{
        console.log("Entra dentro addEventListener para todook");
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
    
    // validación nombre
    let nombreLibro = document.getElementById("nombreLibro");
    if(!nombreLibro.validity.valid){
        console.log("Entra if");
        event.preventDefault();
    } else {
        nombreLibro.style.color = "black";
        console.log("Entra else");
    }

    // validación del identificador
    let identificador = document.getElementById("identificador");
    if(!identificador.validity.valid){
        console.log("entra if identificador");
        event.preventDefault();    
    } else {
        identificador.style.color = "black";
    }

    // validación de fecha
    let fecha = document.getElementById("fecha")
    if(!fecha.validity.valid){
        event.preventDefault();
    } else {
        fecha.style.color = "black";
    }
    // validación numero copias

    let numCopias = document.getElementById("numCopias")
    if(!numCopias.validity.valid){
        event.preventDefault();
    } else{
        numCopias.style.background = "black";
    }
    // validación de la edad recomendada
    let edad = document.getElementById("edad");
    if(!edad.validity.valid){
        event.preventDefault();
    } else {
        edad.style.background = "black";
    }

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
        alert("Es fin de semana")
    }

    // controlar hora
    let hora = date.getHours();



    //alert("Meter contenido más variables");
    // ese aviso que quiero meter con letras es una variable modificando tamaño, etc
    // if(date.getDay() == 3){ alert("dentro del dia")} else {"Es fin de semana"}

 }
