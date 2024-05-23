import { conectaAPI } from "./conectaApi.js";

const camposFormulario = document.querySelectorAll('.formulario');

export default function validadorFormulario(campo) { 
    conectaAPI.validarFormulario(campo);

    const alertaNome = document.querySelector('.alertaNome');
    const alertaValor = document.querySelector('.alertaValor');
    const alertaImagem = document.querySelector('.alertaImagem');
    const nome = document.querySelector('[data-nome]');
    const valor = document.querySelector('[data-valor]');
    const imagem = document.querySelector('[data-imagem]');
    const botaoGuardar = document.querySelector('.botaoGuardar');

    alertaNome.style.display = 'none';
    alertaValor.style.display = 'none';
    alertaImagem.style.display = 'none';

    if (campo.name === 'nome' && campo.value.length < 3) {
        alertaNome.style.display = 'inline';
        alertaNome.innerHTML = `<p>Nome inválido!</p>`;
        return nome.reset();
    }
    else if (campo.name === 'valor' && !/^\d+(\.\d{1,2})?$/.test(campo.value) && campo.value == 0) {
        alertaValor.style.display = 'inline';
        alertaValor.innerHTML = `<p>Valor inválido!</p>`;
        valor.value.reset();
    }
    else if (campo.name === 'imagem' && !/\.(jpeg|jpg|gif|png)$/i.test(campo.value) && campo.value == 0) {
        alertaImagem.style.display = 'inline';
        alertaImagem.innerHTML = `<p>Imagem inválida!</p>`;
        imagem.value.reset();
    }

    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        alert('Preencha o formulário corretamente antes de enviar!');
    }
    else {
        botaoGuardar.abled;
    }
}

camposFormulario.forEach(campo => {
    campo.addEventListener('blur', () => validadorFormulario(campo));
});


