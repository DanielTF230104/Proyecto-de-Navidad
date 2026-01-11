"use strict";

// Guardar usuario en localStorage bajo un objeto "usuarios"
function guardarUsuario(user) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    usuarios[user.usuario] = user;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Obtener todos los usuarios
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || {};
}

// Obtener un usuario por su clave
function getUsuario(usuarioClave) {
    const usuarios = obtenerUsuarios();
    return usuarios[usuarioClave] || false;
}

// Borrar un usuario
function borrarUsuario(usuarioClave) {
    const usuarios = obtenerUsuarios();
    delete usuarios[usuarioClave];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Mostrar todos los usuarios
function mostrarUsuarios() {
    limpiarResultado();
    const usuarios = obtenerUsuarios();
    if (Object.keys(usuarios).length === 0) {
        resultado.innerHTML = "<p>⚠️ No hay usuarios guardados.</p>";
        return;
    }

    resultado.innerHTML = "<h3>Usuarios guardados:</h3>";
    for (const user of Object.values(usuarios)) {
        resultado.innerHTML += `
        <div style="margin-bottom:10px;">
            ${user.imagen ? `<img src="${user.imagen}" width="30" style="border-radius:8px;">` : ""} <b>
            ${user.nombre}</b> (${user.usuario})<br>
        </div>`;
    }
}