"use strict";

async function mostrarDetallesPersonaje(name) {
    mensaje.textContent = "⏳ Buscando detalles del personaje...";
    const detallesPersonaje = await APIcall("", "", "", name);

    if (!detallesPersonaje || detallesPersonaje.length === 0) {
        mensaje.textContent = "⚠️ No se encontraron detalles.";
        cardDetallesPersonaje.classList.add("hidden");
        cardTransformaciones.classList.add("hidden");
        cardDetallesTransformacion.classList.add("hidden");
        return;
    }

    const personaje = detallesPersonaje[0]; // ✅ Único resultado 

    mensaje.textContent = "";
    cardDetallesPersonaje.classList.remove("hidden");
    const contenedorDetallesPersonaje = document.querySelector("#cardDetallesPersonaje .cardBody");
    contenedorDetallesPersonaje.innerHTML = ""; // limpiar contenido anterior

    const div = document.createElement("div");
    div.classList.add("db-detalle-body");

    div.innerHTML = `
        <div>
            <h3><a href="#" data-id="${personaje.id}">${personaje.name}</a></h3>
            <img src="${personaje.image}" alt="${personaje.name}">
            <p><strong>KI:</strong> ${personaje.ki || "Desconocido"}</p>
        </div>
        <div>
            <p><strong>Raza:</strong> ${personaje.race}</p>
            <p><strong>Género:</strong> ${personaje.gender}</p>
            <p><strong>Afiliación:</strong> ${personaje.affiliation}</p>
            <textarea readonly rows="27" cols="25">${personaje.description || "Descripción no disponible"}</textarea>
        </div>
    `;

    // ✅ Activar clic en el nombre del personaje
    div.querySelector("a").addEventListener("click", e => {
        e.preventDefault();
        mostrarTransformaciones(personaje.name); // ✅ Llamamos a transformaciones
    });
    contenedorDetallesPersonaje.appendChild(div);
}
