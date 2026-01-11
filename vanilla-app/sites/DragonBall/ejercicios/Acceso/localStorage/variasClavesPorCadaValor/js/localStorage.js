"use strict";
console.log("Cargando localStorage.js...");

// OPCIÓN 1: Usar 1 clave = 1 usuario (clave = usuario)
function guardarUsuarioPorClave(user) {
    localStorage.setItem(user.usuario, JSON.stringify(user));
}

function leerUsuariosPorClave() {
    let salida = "📦 Usuarios guardados (1 clave = 1 usuario):<br>";

    if (localStorage.length === 0) {
        return salida + "⚠️ No hay usuarios guardados.";
    } else {
        // Devuelve solo las claves de un objeto, en forma de array.
        Object.entries(localStorage).forEach(([clave, valor]) => {
            try {
                const user = JSON.parse(valor);
                if (user.usuario) { // comprobamos que sea un usuario
                    salida += `👤 ${user.nombre} (${user.usuario})<br>`;
                }
            } catch {
                // si no es un objeto JSON válido, lo ignoramos
            }
        });
    }
    return salida;
}

function getUsuarioPorClave(clave) {
    const valor = localStorage.getItem(clave);
    if (valor) {
        try {
            return JSON.parse(valor); // devuelve el objeto usuario
        } catch {
            return valor; // si no es JSON válido, devuelve el valor crudo
        }
    }
    return false; // no existe
}

function borrarUsuarioPorClave(usuario) {
    localStorage.removeItem(usuario);
}
