let listaDeNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre == ""){
        alert("Por favor, inserte un nombre.");
    } else{
        listaDeNombres.push(nombre);
        document.getElementById("amigo").value = "";
    }
}

