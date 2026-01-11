"use strict";
console.log("Cargando script.js...");

// Eventos Opción 1
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");

const resultado = document.getElementById("resultado");
resultado.innerHTML = leerUsuariosPorClave();

document.getElementById("guardar").addEventListener("click", () => {
  let user = {
    nombre: nombre.value,
    usuario: usuario.value,
    password: password.value,
  };
  guardarUsuarioPorClave(user);
  resultado.innerHTML = leerUsuariosPorClave();
});

document.getElementById("leer").addEventListener("click", () => {
  const usuarioBuscado = getUsuarioPorClave(usuario.value);
  if (usuarioBuscado) {
    resultado.innerHTML = `👤 <b>${usuarioBuscado.nombre}</b> (${usuarioBuscado.usuario})<br>`;
    console.log("Usuario encontrado:", usuarioBuscado.nombre, usuarioBuscado.password);
  } else {
    resultado.innerHTML = "⚠️ No existe ese usuario.";
    console.log("No existe ese usuario");
  }
});

document.getElementById("borrar").addEventListener("click", () => {
  borrarUsuarioPorClave(usuario.value);
  resultado.innerHTML = leerUsuariosPorClave();
});
