// Función que recoge todos los eventos al cargar la pagina
window.onload = function(){
    let formulario = document.getElementById("form")
    creacionInputLiteratura();

    formulario.addEventListener("submit", event=>{
        let todoOk = validacionesFormulario(event);
        if(todoOk){
            window.open("./ventana.html", "pop-up", "width=500px height=300px");
            event.preventDefault();
        }
    },false);

    // llamar diversos métodos
    // tooltip
    // los que sean
} 

// Funcióon que reliza la validación del formulario
function validacionesFormulario(event){
    let todoOk = true;
    // validación nombre
    let nombreLibro = document.getElementById("nombreLibro");
    if(!nombreLibro.validity.valid){
        console.log("Entra if");
        nombreLibro.style.background = "red";
        event.preventDefault();
        todoOk = false;
    } else {
        nombreLibro.style.color = "black";
        console.log("Entra else");
    }

    // validación del identificador
    let identificador = document.getElementById("identificador");
    if(!identificador.validity.valid){
        console.log("entra if identificador");
        identificador.style.background = "red";
        event.preventDefault();
        todoOk = false;
    } else {
        identificador.style.color = "black";
    }

    // validación de fecha
    let fecha = document.getElementById("fecha")
    if(!fecha.validity.valid){
        fecha.style.background = "red";
        event.preventDefault();
        todoOk = flase;
    } else {
        fecha.style.color = "black";
    }
    // validación numero copias
    /**************************************Preguntar como se valida fecha y numero copias */
    /**************************************Preguntar como escoger borde para validación */
    let numCopias = document.getElementById("numCopias")
    if(!numCopias.validity.valid){
        numCopias.style.background = "red";
        event.preventDefault();
        todoOk = false;
    } else{
        numCopias.style.background = "black";
    }
    // validación de la edad recomendada
    let edad = document.getElementById("edad");
    if(!edad.validity.valid){
        edad.style.background = "red";
        event.preventDefault();
    } else {
        edad.style.background = "black";
    }
    // validación de las obversaciones
}

 // creación de campoMas si selecciona literatura infantil
 /********************************************************Preguntar como escoger cuando se elecciona literatura */
 function creacionInputLiteratura(){
    let value2 = document.getElementById("valor2");

    if(value2 == "Infantil"){
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

