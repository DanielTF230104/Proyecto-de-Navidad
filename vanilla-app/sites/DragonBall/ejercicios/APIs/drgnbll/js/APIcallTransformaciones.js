"use strict";

async function APIcallTransformaciones() {
    const baseUrl = "https://dragonball-api.com/api/transformations";

    try {
        const arr = await APIresponse(baseUrl);
        return arr;
    } catch (error) {
        console.error("❌ Error en APIcallTransformaciones:", error);
        return [];
    }
}
