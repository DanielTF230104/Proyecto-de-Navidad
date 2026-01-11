"use strict";

async function mostrarPersonajes(gender, race, affiliation) {
    mensaje.textContent = "⏳ Buscando personajes...";
    personajes = await APIcall(gender, race, affiliation, "");

    if (!personajes || personajes.length === 0) {
        mensaje.textContent = "⚠️ No se encontraron resultados.";
        cardPersonajes.classList.add("hidden");
        cardDetallesPersonajes.classList.add("hidden");
        cardTransformaciones.classList.add("hidden");
        cardDetallesTransformacion.classList.add("hidden");
        return;
    }

    

    mensaje.textContent = "";
    cardPersonajes.classList.remove("hidden");
    const contenedorPersonajes = document.querySelector("#cardPersonajes .cardBody");
    contenedorPersonajes.innerHTML = ""; // Vacía el contenedor

    personajes.forEach(personaje => {
        const div = document.createElement("div");
        div.classList.add("db-mini-card");



        div.innerHTML = `
            <h4><a href="#" data-id="${personaje.id}">${personaje.name}</a></h4>
            <img src="${personaje.image}" alt="${personaje.name}">
            <p><strong>KI:</strong> ${personaje.ki || "Desconocido"}</p>
        `;



        // ✅ Activar clic en el nombre del personaje
        div.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault(); // Usamos el enlace como botón y no para resolver <a href="#"... es el germen de las SPA
            mostrarDetallesPersonaje(personaje.name); // ← ahora pasamos el nombre
        });
        contenedorPersonajes.appendChild(div);
    });
}
