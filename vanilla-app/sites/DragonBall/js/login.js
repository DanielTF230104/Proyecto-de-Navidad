// archivo: login.js
"use strict";

const btnAcceder = document.getElementById("acceder");
const mensaje = document.getElementById("mensaje");

btnAcceder.addEventListener("click", async () => {
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!usuario || !password) {
        mensaje.textContent = "❌ Por favor, rellena todos los campos.";
        return;
    }

    try {
        const datos = await leerUsuario(usuario);

        if (!datos) {
            mensaje.textContent = "❌ El usuario no existe.";
            return;
        }

        if (datos.password !== password) {
            mensaje.textContent = "❌ Contraseña incorrecta.";
            return;
        }

        await guardarSesion(usuario); // Guardamos el ID del usuario como sesión

        mensaje.textContent = `✅ Bienvenido, ${datos.nombre}. Redirigiendo...`;

        setTimeout(() => {
            window.location.href = "./index.html";
        }, 1500);
    } catch (error) {
        mensaje.textContent = "❌ Error al iniciar sesión.";
    }
});
