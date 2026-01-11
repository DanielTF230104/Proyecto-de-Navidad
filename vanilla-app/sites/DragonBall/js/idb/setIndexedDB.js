"use strict";

async function guardarUsuario(user) {
  try {
    if (!db) await abrirBaseDatos();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction("usuarios", "readwrite");
      const store = transaction.objectStore("usuarios");
      const requestEscribir = store.put(user); // Inserta o actualiza

      requestEscribir.onsuccess = () => {
        console.log(`✅ Usuario '${user.usuario}' guardado correctamente.`);
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

async function borrarUsuario(usuarioClave) {
  try {
    if (!db) await abrirBaseDatos();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction("usuarios", "readwrite");
      const store = transaction.objectStore("usuarios");
      const requestBorrar = store.delete(usuarioClave);

      requestBorrar.onsuccess = () => {
        console.log(`✅ Usuario '${usuarioClave}' borrado correctamente.`);
        resolve(true);
      };

      requestBorrar.onerror = (event) => {
        console.error("❌ Error al borrar usuario:", event.target.error);
        reject(event.target.error);
      };
    });

  } catch (e) {
    console.error("❌ Error en borrarUsuarioIndexedDB:", e);
  }
}
