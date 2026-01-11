"use strict";

let imagenActual = null;

const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const imagen = document.getElementById("imagen");
const preview = document.getElementById("preview");
const btnGuardar = document.getElementById("guardar");
const btnGuardarAPI = document.getElementById("guardarAPI");
const mensaje = document.getElementById("mensaje");

btnGuardar.addEventListener("click", async () => {
    const existente = await leerUsuario(usuario.value); // Comprobamos si el usuario existe
    if (existente) {
        mensaje.textContent = "⚠️ El usuario ya existe.";
        return;
    }

    const archivo = imagen.files[0]; // Comprobamos las condiciones de la imagen suministrada
    const imagenFinal = archivo
        ? archivo
        : (imagenActual || './img/user.png');

    await guardarUsuario({
        nombre: nombre.value,
        usuario: usuario.value,
        password: password.value,
        imagen: imagenFinal,
    });

    // Reset opcional
    imagen.value = null;
    preview.style.display = "none";
    imagenActual = null;

    // Opcional: redireccionar a login después de 2 segundos
    /*
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 2000);
    */
});

btnGuardarAPI.addEventListener("click", async () => {
    const dataUser = (await APIcall()).results[0];

    nombre.value = dataUser.name.first;
    usuario.value = (dataUser.name.first.substring(0, 2) + dataUser.name.last.substring(0, 2)).toLowerCase();
    password.value = 'dejameya';
    preview.src = dataUser.picture.thumbnail;

    // Guardamos esta URL como imagenActual para que `btnGuardar` la use
    imagenActual = dataUser.picture.thumbnail;

    btnGuardar.click(); // reutiliza el código de guardado

    // Opcional: redireccionar a login después de 2 segundos
    /*
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 2000);
    */
});
