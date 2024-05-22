import constroiCard from "./mostrarProdutos.js";

import validadorFormulario from "./validar.js";

const camposDoFormulario = document.querySelectorAll(".formulario");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => validadorFormulario(campo));
    campo.addEventListener('submit', () => validadorFormulario(campo));
})

constroiCard();
