"use strict";

async function APIcall() {
    const urlBase = "https://randomuser.me/api/";
    try {
        const data = await APIresponse(urlBase);
        return data;
    } catch (error) {
        console.error(error);
        mensaje.textContent = "❌ Error al obtener datos de la API.";
        return {}
    }
}