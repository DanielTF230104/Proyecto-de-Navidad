// ============================
// 📄 routes/superheroDB/leer.js
// ============================
"use strict";

const express = require("express");
const mysql = require("mysql2");
const router = express.Router();
const dbConfig = require("../config/db.config");

router.get("/leer", (req, res) => {
  const connection = mysql.createConnection(dbConfig.superheroDB);
  const sql = "SELECT * FROM personajes ORDER BY id_api ASC";

  connection.query(sql, (error, results) => {
    connection.end();
    if (error)
      return res.status(500).json({ success: false, mensaje: "Error al leer personajes" });
    res.json(results);
  });
});

module.exports = router;
