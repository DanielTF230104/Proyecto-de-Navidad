"use strict";

// Referencias DOM
const nombre = document.getElementById("nombre");
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const imagen = document.getElementById("imagen");
const resultado = document.getElementById("resultado");
const btnGuardar = document.getElementById("guardar");
const btnBorrar = document.getElementById("borrar");

mostrarUsuarios();  

// Limpiar resultado
function limpiarResultado() {
    resultado.innerHTML = "";
}

// Convierte un File a DataURL (Base64)
function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const lector = new FileReader();
        lector.onload = () => resolve(lector.result);
        lector.onerror = () => reject(new Error("No se pudo leer el archivo"));
        lector.readAsDataURL(file);
    });
}

// Eventos
btnGuardar.addEventListener("click", async () => {
    const archivo = imagen.files[0];
    if (!archivo) {
        alert("Selecciona una imagen antes de guardar.");
        return;
    }

    try {
        const imagenBase64 = await fileToDataURL(archivo);
        const user = {
            nombre: nombre.value,
            usuario: usuario.value,
            password: password.value,
            imagen: imagenBase64
        };
        guardarUsuario(user);
        console.log("✅ Usuario guardado correctamente en Base64:", user);
        mostrarUsuarios();
    } catch (e) {
        console.error("Error al leer la imagen:", e);
    }
});

btnBorrar.addEventListener("click", () => {
    borrarUsuario(usuario.value);
    mostrarUsuarios();
});
