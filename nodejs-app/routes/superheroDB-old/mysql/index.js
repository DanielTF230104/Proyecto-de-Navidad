// ============================
// 📄 routes/superheroDB/mysql/index.js
// ============================
"use strict";

const express = require("express");
const router = express.Router();

// Importar rutas individuales
const crearTabla = require("../../superheroDB/crearTabla");
const grabar = require("../../superheroDB/grabar");
const leer = require("../../superheroDB/leer");
const borrar = require("../../superheroDB/borrar");

// Asociar rutas activas
router.use("/", crearTabla);
router.use("/", grabar);
router.use("/", leer);
router.use("/", borrar);

module.exports = router;
