// ============================
// 📄 server.js (VERSIÓN FINAL)
// ============================
"use strict";

const express = require("express");
const cors = require("cors");
const app = express();

// 1. CONFIGURACIÓN DE CORS (Debe ir ANTES de las rutas)
app.use(cors({
  origin: "http://localhost:4216", // Tu puerto de Angular
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// 2. LÍMITE DE TAMAÑO PARA IMÁGENES BASE64
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// ============================
// 🚨 DEFINICIÓN DE RUTAS
// ============================

// Importamos los archivos de ruta
const grabarRuta = require("./routes/accesoDB/grabar");
const leerRuta = require("./routes/accesoDB/leer");

// Las asignamos al path "/usuarios" que espera tu Angular
// Esto hará que funcionen: 
// POST http://localhost:3000/usuarios/grabar
// POST http://localhost:3000/usuarios/login (o como lo tengas en leer.js)
app.use("/usuarios", grabarRuta);
app.use("/usuarios", leerRuta);

// Resto de tus rutas de base de datos
app.use("/accesoDB", require("./routes/accesoDB/mysql"));
app.use("/superheroDB", require("./routes/superheroDB/mysql"));
app.use("/dbzDB/personajes", require("./routes/dbzDB/personajes/mysql"));
app.use("/dbzDB/planetas", require("./routes/dbzDB/planetas/mysql"));
app.use("/dbzDB/transformaciones", require("./routes/dbzDB/transformaciones/mysql"));
app.use("/dbzDB/mispersonajes", require("./routes/dbzDB/mispersonajes/mysql"));

// ============================
// INICIO SERVIDOR
// ============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log("✅ Rutas de usuarios listas en /usuarios/grabar y /usuarios/leer");
});