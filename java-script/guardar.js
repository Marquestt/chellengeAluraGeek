import { conectaAPI } from "./conectaApi.js";
import { validarFormulario, validarCampo } from "./validaForm.js";

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


formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    if (!validarFormulario()) {
        alert('Valores inválidos, por favor preencha o formulário novamente!');
        return;
    }
    guardar(evento);
});