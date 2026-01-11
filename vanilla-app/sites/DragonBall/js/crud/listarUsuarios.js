"use strict";

async function listarUsuarios() {
    tabla.innerHTML = "";
    const usuarios = await leerUsuarios();

    if (usuarios.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 4;
        td.textContent = "<p>⚠️ No hay usuarios guardados.</p>"
        td.style.textAlign = "center";
        tr.appendChild(td);
        tabla.appendChild(tr);
        return;
    }

    usuarios.forEach((user) => {
        //FILA
        const tr = document.createElement("tr");

        // Nombre
        const tdNombre = document.createElement("td");
        tdNombre.textContent = user.nombre;

        // Usuario
        const tdUsuario = document.createElement("td");
        tdUsuario.textContent = user.usuario;

        // Imagen
        const tdImagen = document.createElement("td");
        const img = document.createElement("img");

        img.src = typeof user.imagen === "string"
            ? user.imagen
            : URL.createObjectURL(user.imagen);

        img.width = 40;
        img.height = 40;
        img.style.borderRadius = "50%";
        img.onload = () => URL.revokeObjectURL(img.src);
        tdImagen.appendChild(img);

        // Botones (Borrar y Actualizar)
        const tdAcciones = document.createElement("td");
        // Botón Borrar
        const btnBorrar = document.createElement("button");
        btnBorrar.innerHTML = `<img src="./img/delete.png" width="22" height="22" />`;
        btnBorrar.addEventListener("click", async () => {
            await borrarUsuario(user.usuario);
            await listarUsuarios();
            mensaje.textContent = "Usuario borrado.";
        });
        tdAcciones.appendChild(btnBorrar);

        // Botón Actualizar
        const btnActualizar = document.createElement("button");
        btnActualizar.innerHTML = `<img src="./img/update.png" width="22" height="22" />`;
        btnActualizar.addEventListener("click", async () => {
            nombreCRUD.value = user.nombre;
            usuarioCRUD.value = user.usuario;
            passwordCRUD.value = user.password;
            imagenCRUD.value = null; // siempre debe resetearse (o al menos es conveniente)
            // Guardamos la imagen original (sea Blob o string)
            imagenActual = user.imagen;
            // Mostramos la imagen actual sin modificar el input File
            if (user.imagen) {
                preview.style.display = "block";
                preview.src = typeof user.imagen === "string"
                    ? user.imagen
                    : URL.createObjectURL(user.imagen);
            }
            await borrarUsuario(user.usuario);
            await listarUsuarios();
            mensaje.textContent = "Usuario cargado para actualizar.";
        });
        tdAcciones.appendChild(btnActualizar);

        // Cerrar el DOM
        tr.appendChild(tdNombre);
        tr.appendChild(tdUsuario);
        tr.appendChild(tdImagen);
        tr.appendChild(tdAcciones);
        tabla.appendChild(tr);
    });
}
