"use strict";

const express = require("express");
const mysql = require("mysql2");
const router = express.Router();
const dbConfig = require("../config/db.config");

router.post("/grabar", (req, res) => {
    const connection = mysql.createConnection(dbConfig.accesoDB);
    const { id, nombre, username, imagen, rol } = req.body;
    
    // Capturamos la contraseña (si viene)
    const contrasena = req.body.password || req.body.pass;

    if (!nombre || !username) {
        return res.json({ ok: false, mensaje: "Nombre y Username son obligatorios" });
    }

    if (id) {
        // ==========================================
        // 📝 MODO EDICIÓN (UPDATE) - Inteligente
        // ==========================================
        let sqlUpdate;
        let valuesUpdate;

        if (contrasena && contrasena.trim() !== "") {
            // Si el usuario envió una contraseña, la actualizamos
            sqlUpdate = "UPDATE usuarios SET nombre=?, username=?, password=?, imagen=?, rol=? WHERE id=?";
            valuesUpdate = [nombre, username, contrasena, imagen, rol, id];
        } else {
            // Si NO envió contraseña, NO tocamos la columna 'password'
            sqlUpdate = "UPDATE usuarios SET nombre=?, username=?, imagen=?, rol=? WHERE id=?";
            valuesUpdate = [nombre, username, imagen, rol, id];
        }

        connection.query(sqlUpdate, valuesUpdate, (err) => {
            connection.end();
            if (err) return res.status(500).json({ ok: false, mensaje: err.sqlMessage });
            res.json({ ok: true, mensaje: "Usuario actualizado sin cambiar contraseña" });
        });

    } else {
        // ==========================================
        // ✨ MODO CREACIÓN (INSERT)
        // ==========================================
        if (!contrasena) {
            connection.end();
            return res.json({ ok: false, mensaje: "La contraseña es obligatoria para nuevos usuarios" });
        }

        const sqlInsert = "INSERT INTO usuarios (nombre, username, password, imagen, rol) VALUES (?, ?, ?, ?, ?)";
        const valuesInsert = [nombre, username, contrasena, imagen, rol];

        connection.query(sqlInsert, valuesInsert, (err) => {
            connection.end();
            if (err) return res.status(500).json({ ok: false, mensaje: err.sqlMessage });
            res.json({ ok: true, mensaje: "Usuario creado correctamente" });
        });
    }
});

module.exports = router;