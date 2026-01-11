"use strict";

let personajes = []; // Últimos personajes consultados

const btnBuscar = document.getElementById("buscar");
const mensaje = document.getElementById("mensaje");

const cardPersonajes = document.getElementById("cardPersonajes");
const cardDetallesPersonaje = document.getElementById("cardDetallesPersonaje");
const cardTransformaciones = document.getElementById("cardTransformaciones");
const cardDetallesTransformacion = document.getElementById("cardDetallesTransformacion");

btnBuscar.addEventListener("click", async () => {
    const gender = document.getElementById("gender").value;
    const race = document.getElementById("race").value;
    const affiliation = document.getElementById("affiliation").value;

    mostrarPersonajes(gender, race, affiliation);
});
