"use strict";

async function initMenu() {
  const enlacesPrivados = document.querySelectorAll(".privado");
  const enlacesPublicos = document.querySelectorAll(".publico");
  const nodoUsuario = document.getElementById("usuario");
  const cerrarSesion = document.getElementById("cerrarSesion");
  const fotoPerfil = document.querySelector(".header-profile img");

  const usuarioActivo = await obtenerUsuarioActivo(); // todo el objeto {} nombre, password, imagen, etc...

  if (usuarioActivo) { // Usuario logueado
    // Mostrar enlaces privados
    enlacesPrivados.forEach(el => el.style.display = "inline-block");
    enlacesPublicos.forEach(el => el.style.display = "none");

    // Mostrar nombre real del usuario
    nodoUsuario.innerHTML = `<a href="#">👤 ${usuarioActivo.nombre}</a>`;

    // Mostrar imagen personalizada
    if (usuarioActivo.imagen) {
      fotoPerfil.src = typeof usuarioActivo.imagen === "string"
        ? usuarioActivo.imagen
        : URL.createObjectURL(usuarioActivo.imagen);
    }

    if (usuarioActivo.usuario === "admin") {
      const gestionUsuarios = document.getElementById("gestionUsuarios");
      if (gestionUsuarios) gestionUsuarios.style.display = "inline-block";
      console.log("✅ ADMIN DETECTADO → Se muestra el enlace de gestión de usuarios.");
    } else {
      const gestionUsuarios = document.getElementById("gestionUsuarios");
      if (gestionUsuarios) gestionUsuarios.style.display = "none";
      console.log("🚫 NO ES ADMIN → No se muestra el enlace de gestión de usuarios.");
    }

    // Habilitar cierre de sesión
    cerrarSesion?.addEventListener("click", async (e) => {
      e.preventDefault();              // Impide la recarga inmediata
      await borrarSesion();
      location.reload();               // Recarga controlada después de borrar
    });

  } else { // Usuario NO logueado
    // Ocultamos enlaces privados
    enlacesPrivados.forEach(el => el.style.display = "none");
    enlacesPublicos.forEach(el => el.style.display = "inline-block");
    fotoPerfil.src = "./img/user.png";
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await abrirBaseDatos(); // garantiza que IndexedDB esté lista
  await initMenu();
});
