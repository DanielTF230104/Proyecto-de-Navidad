"use strict";

async function APIcall(gender = "", race = "", affiliation = "", name = "") {
    const baseUrl = "https://dragonball-api.com/api/characters"; // URL base sin limit

    const params = new URLSearchParams();

    // Si se pasa un nombre, lo agregamos
    if (name) {
        params.append("name", name);
    } else {
        // Si no se pasa nombre, agregamos los filtros (si existen)
        if (gender) params.append("gender", gender);
        if (race) params.append("race", race);
        if (affiliation) params.append("affiliation", affiliation);
    }

    // Solo agregamos el límite si no hay un nombre y si hay algún filtro
    if (!name && (gender || race || affiliation)) {
        params.append("limit", 58);  // Agregar limit solo si se aplica un filtro
    } else if (!name && !gender && !race && !affiliation) {
        params.append("limit", 58);  // Agregar limit si no hay nombre ni filtros
    }

    // Construir la URL final
    const url = params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
    
    console.log("🔗 URL de la API:", url); // Verifica la URL generada
    
    try {
        const arr = await APIresponse(url);
        return arr;
    } catch (error) {
        console.error("❌ Error en APIcall:", error);
        return [];
    }
}
