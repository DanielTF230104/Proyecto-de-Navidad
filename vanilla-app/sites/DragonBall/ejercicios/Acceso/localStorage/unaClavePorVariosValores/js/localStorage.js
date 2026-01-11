"use strict";
console.log("Cargando localStorage.js...");

// OPCIÓN 2: Usar 1 clave = varios usuarios (clave = "usuarios")
function guardarUsuarioEnObjeto(user) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    usuarios[user.usuario] = user;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function leerUsuariosEnObjeto() {
    let salida = "📦 Usuarios guardados (objeto único = usuario):<br>";
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    // Devuelve pares [clave, valor] de un objeto, en forma de array de arrays.
    const claves = Object.keys(usuarios);

    if (claves.length === 0) {
        return salida + "⚠️ No hay usuarios guardados.";
    } else {
        claves.forEach(clave => {
            const u = usuarios[clave];
            salida += `👤 ${u.nombre} (${u.usuario})<br>`;
        });
    }
    return salida;
}

function getUsuarioEnObjeto(clave) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    if (usuarios[clave]) {
        return usuarios[clave]; // devuelve el objeto usuario
    }
    return false; // no existe
}

function borrarUsuarioEnObjeto(usuario) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    delete usuarios[usuario];
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}
