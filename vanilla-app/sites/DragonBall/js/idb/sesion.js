"use strict";

async function guardarSesion(nombreUsuario) {
  try {
    if (!db) await abrirBaseDatos();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction("sesion", "readwrite");
      const store = transaction.objectStore("sesion");
      const sesionActiva = {
        clave: "usuarioActivo",
        valor: nombreUsuario
      };
      const requestEscribir = store.put(sesionActiva); // Inserta o actualiza

      requestEscribir.onsuccess = () => {
        console.log(`✅ Usuario '${nombreUsuario}' guardado correctamente.`);
        resolve(true);
      };

      requestEscribir.onerror = (event) => {
        console.error("❌ Error al guardar usuario:", event.target.error);
        reject(event.target.error);
      };
    });

  } catch (e) {
    console.error("❌ Error en guardarUsuarioIndexedDB:", e);
  }
}

async function leerSesion() {
  if (!db) await abrirBaseDatos();

  return new Promise((resolve, reject) => {
    const transaccion = db.transaction(["sesion"], "readonly");
    const almacen = transaccion.objectStore("sesion");

    const solicitud = almacen.get("usuarioActivo");

    solicitud.onsuccess = () => {
      resolve(solicitud.result ? solicitud.result.valor : null);
    };

    solicitud.onerror = (event) => {
      console.error("❌ Error al obtener la sesión activa (usuario)", event);
      reject(event);
    };
  });
}

async function borrarSesion() {
  try {
    if (!db) await abrirBaseDatos();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(["sesion"], "readwrite");
      const store = transaction.objectStore("sesion");
      const requestBorrar = store.delete("usuarioActivo");

      requestBorrar.onsuccess = () => {
        console.log(`✅ Sesión cerrada correctamente.`);
        resolve(true);
      };

      requestBorrar.onerror = (event) => {
        console.error("❌ Error al cerrar la sesión:", event.target.error);
        reject(event.target.error);
      };
    });
  } catch (e) {
    console.error("❌ Error en borrarUsuarioIndexedDB:", e);
  }
}