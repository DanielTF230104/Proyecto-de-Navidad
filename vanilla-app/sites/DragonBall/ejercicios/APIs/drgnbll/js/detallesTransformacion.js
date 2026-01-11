"use strict";

async function mostrarDetallesTransformacion(id) {
    mensaje.textContent = "⏳ Buscando detalles de la transformación...";
    const transformaciones = await APIcallTransformaciones();

    const filtrada = transformaciones.filter(transformacion =>
        (transformacion.id || "") === id
    );

    if (!filtrada || filtrada.length === 0) {
        mensaje.textContent = "⚠️ No se encontraron transformaciones.";
        cardDetallesTransformacion.classList.add("hidden");
        return;
    }

    const detallesTransformacion = filtrada[0]; // ✅ Único resultado 


    mensaje.textContent = "";
    cardDetallesTransformacion.classList.remove("hidden");
    const contenedorDetallesTransformacion = document.querySelector("#cardDetallesTransformacion .cardBody");
    contenedorDetallesTransformacion.innerHTML = ""; // limpiar contenido anterior

    const div = document.createElement("div");
    div.classList.add("db-detalle-transformacion-body");

    div.innerHTML = `
        <div>
            <h3>${detallesTransformacion.name}</h3>
            <img src="${detallesTransformacion.image}" alt="${detallesTransformacion.name}">
            <p><strong>KI:</strong> ${detallesTransformacion.ki || "Desconocido"}</p>
        </div>
    `;
    contenedorDetallesTransformacion.appendChild(div);
}
