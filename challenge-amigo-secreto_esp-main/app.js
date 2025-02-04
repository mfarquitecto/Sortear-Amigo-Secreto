
//DECLARANDO UNA VARIABLE TIPO ARRAY PARA ALMACENAR LOS NOMBRES
let listaAmigos = [];

// FUNCIÓN PARA AGREGAR AMIGOS
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        alert("Por Favor, Inserte un Nombre.");
        return false;
    } else {
        listaAmigos.push(amigo); // Agregar el nombre al array
        actualizarLista();
        limpiarCaja();
        return true;
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// FUNCIÓN PARA ACTUALIZAR LA LISTA DE AMIGOS
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; // Limpiar la lista actual

    for (let i = 0; i < listaAmigos.length; i++) { //Iterar la matriz y crear la lista
        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

//FUNCION PARA SORTEAR EL AMIGO SECRETO
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Primero Inserte los Nombres de sus Amigos."); //Alerta de lista vacía
        return false;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Índice al azar
        let amigoSecreto = listaAmigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = ` El Amigo Secreto es: ${amigoSecreto}`; // Mostrar el amigo secreto
        return true;
    }
}