"use strict";

let db;

function abrirBaseDatos() {
    return new Promise((resolve, reject) => {
        const requestDB = indexedDB.open("UsuariosIDB-v5", 1);

        requestDB.onupgradeneeded = (event) => {
            db = event.target.result;
            // Usuarios registrados
            if (!db.objectStoreNames.contains("usuarios")) {
                db.createObjectStore("usuarios", { keyPath: "usuario" });
            }
            // Sesion de Login
            if (!db.objectStoreNames.contains("sesion")) {
                db.createObjectStore("sesion", { keyPath: "clave" });
            }
        };

        requestDB.onsuccess = (event) => {
            db = event.target.result;
            console.log("✅ Base de datos abierta correctamente.");
            resolve(db);
        };

        requestDB.onerror = (event) => {
            console.error("❌ Error al abrir la base de datos:", event.target.error);
            reject(event.target.error);
        };
    });
}
