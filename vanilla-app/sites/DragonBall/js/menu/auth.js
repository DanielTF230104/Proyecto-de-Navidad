"use strict";

async function obtenerUsuarioActivo() {
  const id = await leerSesion(); // "jota" o "admin"
  if (!id) return null;

  const datos = await leerUsuario(id); // objeto usuario
  return datos || null;                
}
