// ============================
// 📄 routes/accesoDB/leer.js (CORREGIDO)
// ============================
"use strict";

const express = require("express");
const mysql = require("mysql2");
const router = express.Router();
const dbConfig = require("../config/db.config");

// 1. Ruta para el Login (POST)
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ ok: false, mensaje: "Faltan credenciales" });
  }

  const connection = mysql.createConnection(dbConfig.accesoDB);
  const sql = "SELECT id, username, nombre, rol, imagen FROM usuarios WHERE username = ? AND password = ?";
  
  connection.query(sql, [username, password], (err, rows) => {
    connection.end();

    if (err) {
      console.error("❌ Error en SQL:", err);
      return res.status(500).json({ ok: false, mensaje: "Error del servidor" });
    }

    if (rows.length === 0) {
      return res.json({ ok: false, mensaje: "Usuario o contraseña incorrectos" });
    }

    return res.json({
      ok: true,
      usuario: rows[0],
      token: "TOKEN-" + Date.now() 
    });
  });
});

// 2. NUEVA RUTA: Para el listado del CRUD (GET) 👈 AÑADIDO AQUÍ
router.get("/lista", (req, res) => {
  const connection = mysql.createConnection(dbConfig.accesoDB);
  const sql = "SELECT id, username, nombre, rol, imagen FROM usuarios";
  
  connection.query(sql, (err, rows) => {
    connection.end();
    if (err) {
      console.error("❌ Error al listar:", err);
      return res.status(500).json({ ok: false, mensaje: "Error al obtener lista" });
    }
    res.json(rows); // Envía el array directamente para el signal de Angular
  });
});

router.delete("/borrar/:id", (req, res) => {
  const id = req.params.id; // Obtenemos el 7 de la URL /borrar/7
  const connection = mysql.createConnection(dbConfig.accesoDB);
  const sql = "DELETE FROM usuarios WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    connection.end();
    if (err) {
      console.error("❌ Error al borrar:", err);
      return res.status(500).json({ ok: false, mensaje: "Error al borrar usuario" });
    }
    
    // Si no hubo error, devolvemos éxito
    res.json({ ok: true, mensaje: "Usuario eliminado correctamente" });
  });
});
console.log("✅ Archivo leer.js cargado correctamente: Rutas /login y /lista activas");
module.exports = router;