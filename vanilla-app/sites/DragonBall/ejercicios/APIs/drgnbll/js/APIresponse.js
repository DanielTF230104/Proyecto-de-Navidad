"use strict";

async function APIresponse(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

        const responseJSON = await response.json();
        return responseJSON.items || responseJSON; // según hayamos hecho la selección, tendré un item[] o un []
    } catch (error) {
        return error;
    }
}