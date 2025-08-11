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
   else amigos.push (ingresarnombre);


}



