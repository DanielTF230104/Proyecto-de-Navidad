// ============================
// 📄 config/db.config.js
// ============================
"use strict";

module.exports = {
    accesoDB: {
        host: "mysql-db",
        user: "root",
        password: "dejame",
        database: "accesoDB",
        // Configuración adicional para mejorar la estabilidad
        connectTimeout: 60000,
        acquireTimeout: 60000,
        timeout: 60000,
    },
    dbz: {
        host: "mysql-db",
        user: "root",
        password: "dejame",
        database: "dbzDB",
        connectTimeout: 60000,
        acquireTimeout: 60000,
        timeout: 60000,
    },
    superheroDB: {
        host: "mysql-db",
        user: "root",
        password: "dejame",
        database: "superheroDB",
        connectTimeout: 60000,
        acquireTimeout: 60000,
        timeout: 60000,
    }
};
