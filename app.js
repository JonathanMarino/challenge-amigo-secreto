let listaDeNombres = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre == ""){
        alert("Por favor, inserte un nombre.");
    } else{
        listaDeNombres.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarLista()
    }
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i<listaDeNombres.length; i++){
        let nuevoNombre = document.createElement('li');
        nuevoNombre.innerHTML = listaDeNombres[i];
        lista.appendChild(nuevoNombre);   
    }
}

function sortearAmigo(){
  if (listaDeNombres != ""){ 
    let indiceAleatorio = parseInt(Math.floor(Math.random()*listaDeNombres.length));
    let nombreSorteado = listaDeNombres[indiceAleatorio];
    let mensajeGanador = document.getElementById("resultado");
    
    mensajeGanador.innerHTML = nombreSorteado;
    mensajeGanador.appendChild(mensajeGanador);
   
}
}

