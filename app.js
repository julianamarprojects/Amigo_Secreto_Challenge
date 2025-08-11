// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* CHALLENGE AMIGO SECRETO 
Se declara variable para poder almacenar los nombres del amigo secreto*/

let amigos = []

//Función para agregar amigos
function agregarAmigo() {
    let ingresarnombre = document.getElementById ("amigo").value.trim();

    //Si el usuario no ingresa nada
    if (ingresarnombre === "") {alert ("El campo no debe estar vacio, ingrese un nombre")
        return;
    }

    //si el usuario ingresa un nombre duplicado
    if (amigos.includes(ingresarnombre)){alert ("El nombre ya está en la lista.");
        return;
    }

    //si cumple con las condiciones
    amigos.push (ingresarnombre);
    actualizarListaAmigos()
  //restablecer el campo de texto a vacío
    limpiarCaja();
}

//Funcion para que la caja se vacia al agregar el amigo
function limpiarCaja (){ document.getElementById("amigo").value = ``;
  }

//funcion para mostrar la lista en pantalla
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    //limpiar la lista
    lista.innerHTML = '';

    // un elemento li por cada amigo
for(let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
}
}