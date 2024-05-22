import { conectaAPI } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function guardar(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const valor = document.querySelector('[data-valor]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    try {
        await conectaAPI.guardar(nome, valor, imagem);
        alert('Produto guardado com sucesso!');
        
        formulario.reset();
    }
    catch(e) {
        alert(e);
    }
}

formulario.addEventListener('submit', evento => guardar(evento));
