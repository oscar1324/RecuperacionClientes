window.onload= () => {
    let ventana = window.opener;
    let divEmergente = document.getElementById("divEmergente");
    let parrafo = document.createElement("p");

    let nombreLibro = document.getElementById("nombreLibro");
    let identificador = document.getElementById("identificador");
    let fecha = document.getElementById("fecha");
    let numCopias = document.getElementById("numCopias");
    let edad = document.getElementById("edad");
    let zonaTexto = document.getElementById("zonaTexto");



        
    divEmerg.innerHTML += "<p>" + "Error en nombre : "          +  + "<br>"  + "</p>" ;
    divEmerg.innerHTML += "<p>" + "Error en identificador: "    +  + "<br>"  + "</p>";
    divEmerg.innerHTML += "<p>" + "Error en fecha:"             +  + "<br>"  + "</p>";
    divEmerg.innerHTML += "<p>" + "Error en edad recomendada: " +  + "<br>"  + "</p>";
    divEmerg.innerHTML += "<p>" +  "Error en observaciones: "   +  + "<br>"  + "</p>";


    
    /**
     *    parrafo.innerHTML += "<p>" + "Error en nombre: " + + "</p>" ;
          parrafo.innerHTML += "<p>" + "Error en identificador: " + 8 + "</p>" ;
          parrafo.innerHTML += "<p>" + "Error en fecha: " + + "</p>" ;
          parrafo.innerHTML += "<p>" + "Error en numero de copias: " + + "</p>" ;
          parrafo.innerHTML += "<p>" + "Error en edad recomendada: " + + "</p>" ;
          parrafo.innerHTML += "<p>" + "Error en observaciones: " + + "</p>" ;
        escribirContenido.appendChild(parrafo);
     * 
     */

}