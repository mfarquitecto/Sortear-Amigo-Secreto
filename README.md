# Sortear un Amigo Secreto

Este proyecto es una aplicación web simple para gestionar y sortear amigos secretos. Los usuarios pueden agregar nombres a una lista y luego realizar un sorteo para seleccionar un amigo secreto al azar.

## Descripción

La aplicación permite a los usuarios:
- Agregar nombres de amigos a una lista.
- Ver la lista actualizada de amigos.
- Sortear un amigo secreto de la lista.

## Características

- Agregar nombres a una lista.
- Validación para evitar entradas vacías.
- Visualización automática de la lista.
- Limpieza del campo de entrada después de cada inserción.
- Sorteo aleatorio de un "Amigo Secreto".

## Requisitos

- Un navegador web moderno que soporte JavaScript.


## Estructura del Proyecto

```
📦 Sortear Amigo Secreto
 ├── 📄 index.html       # Estructura de la página web
 ├── 📄 styles.css       # Estilos para la interfaz (opcional)
 ├── 📄 script.js        # Código JavaScript para la funcionalidad
 ├── 📄 README.md        # Documentación del proyecto
```

## Instalación y Uso

1. Clona este repositorio en tu máquina local:
   ```sh
   git clone https://github.com/mfarquitecto/Sortear-Amigo-Secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa los nombres en el campo de entrada y presiona el botón "Añadir" para agregarlos a la lista.
4. Presiona el botón de "Sortear Amigo" para elegir un amigo al azar.

## Código Principal (script.js)

```javascript
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
```

## Licencia

Este proyecto está bajo la licencia MIT - puedes usarlo y modificarlo libremente.

## Autor

[mfarquitecto](https://github.com/mfarquitecto)

