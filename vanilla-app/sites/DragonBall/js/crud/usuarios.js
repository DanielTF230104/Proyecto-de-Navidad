// archivo: usuarios.js
"use strict";

let imagenActual = null;

const nombre = document.getElementById("nombreCRUD");
const usuario = document.getElementById("usuarioCRUD");
const password = document.getElementById("passwordCRUD");
const imagen = document.getElementById("imagenCRUD");
const preview = document.getElementById("preview");
const btnGuardar = document.getElementById("guardar");
const btnGuardarAPI = document.getElementById("guardarAPI");
const mensaje = document.getElementById("mensaje");
const tabla = document.getElementById("tablaUsuarios").querySelector("tbody");

listarUsuarios();

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

  await listarUsuarios();

  // Reset opcional
  imagen.value = null;
  preview.style.display = "none";
  imagenActual = null;
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
});


