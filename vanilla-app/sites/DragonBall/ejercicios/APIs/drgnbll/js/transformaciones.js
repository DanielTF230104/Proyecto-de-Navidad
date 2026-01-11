"use strict";

async function mostrarTransformaciones(name) {
    mensaje.textContent = "⏳ Buscando transformaciones...";
    const transformaciones = await APIcallTransformaciones();

    const filtradas = transformaciones.filter(transformacion =>
        (transformacion.name || "").toLowerCase().includes(name.toLowerCase())
    );

    if (!filtradas || filtradas.length === 0) {
        mensaje.textContent = "⚠️ No se encontraron transformaciones.";
        cardTransformaciones.classList.add("hidden");
        cardDetallesTransformacion.classList.add("hidden");
        return;
    }

    mensaje.textContent = "";
    cardTransformaciones.classList.remove("hidden");
    const contenedorTransformaciones = document.querySelector("#cardTransformaciones .cardBody");
    contenedorTransformaciones.innerHTML = "";

    filtradas.forEach(transformacion => {
        const div = document.createElement("div");
        div.classList.add("db-mini-card");

        div.innerHTML = `
            <h4><a href="#" data-id="${transformacion.id}">${transformacion.name}</a></h4>
            <img src="${transformacion.image}" alt="${transformacion.name}">
            <p><strong>KI:</strong> ${transformacion.ki || "Desconocido"}</p>
        `;

        // ✅ Activar clic en el nombre del personaje
        div.querySelector("a").addEventListener("click", e => {
            e.preventDefault();
            mostrarDetallesTransformacion(transformacion.id);
        });
        contenedorTransformaciones.appendChild(div);
    });
}
