const alertaNome = document.querySelector('.alertaNome');
const alertaValor = document.querySelector('.alertaValor');
const alertaImagem = document.querySelector('.alertaImagem');
const camposFormulario = document.querySelectorAll('.formulario');

alertaNome.style.display = 'none';
alertaValor.style.display = 'none';
alertaImagem.style.display = 'none';

camposFormulario.forEach(campo => {
    campo.addEventListener("blur", () => {
        validarCampo(campo);
    });
});

export function validarFormulario() {
    let formValido = true;

    camposFormulario.forEach(campo => {
        if (!validarCampo(campo)) {
            formValido = false;
        }
    });

    return formValido;
}

export function validarCampo(campo) {
    if (campo.name === 'nome' && campo.value.length < 3) {
        alertaNome.style.display = 'inline';
        alertaNome.innerHTML = `<p>Nome inválido! Deve conter no mínimo 3 caracteres.</p>`;
        return false;
    } 
    else if (campo.name === 'valor' && (!/^\d+(,\d+)?$/.test(campo.value) || campo.value.trim() === '')) {
        alertaValor.style.display = 'inline';
        alertaValor.innerHTML = `<p>Valor inválido! Deve ser um número positivo.</p>`;
        return false;
    } 
    else if (campo.name === 'imagem' && ((!/\.(jpeg|jpg|gif|png)$/i.test(campo.value) || campo.value.trim() === ''))) {
        alertaImagem.style.display = 'inline';
        alertaImagem.innerHTML = `<p>Imagem inválida! Deve ser um arquivo de imagem.</p>`;
        return false
    }
    
    if (true) {
        if (campo.name === 'nome') {
            alertaNome.style.display = 'none';
        } else if (campo.name === 'valor') {
            alertaValor.style.display = 'none';
        } else if (campo.name === 'imagem') {
            alertaImagem.style.display = 'none';
        }
    }
}
