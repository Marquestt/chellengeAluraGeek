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
    let valido = true;
    
    if (campo.name === 'nome' && campo.value.length < 3) {
        valido = false;
        alertaNome.style.display = 'inline';
        alertaNome.innerHTML = `<p>Nome inválido! Deve conter no mínimo 3 caracteres.</p>`;
    } 
    else if (campo.name === 'valor') {
        if (!/^\d+(,\d{2})?$/.test(campo.value) || campo.value.trim() === '') {
            valido = false;
            alertaValor.style.display = 'inline';
            alertaValor.innerHTML = `<p>Valor inválido! Deve ser um número positivo com até duas casas decimais.</p>`;
        }
    } 
    else if (campo.name === 'imagem') {
        if (!/\.(jpeg|jpg|gif|png)$/i.test(campo.value) || campo.value.trim() === '') {
            valido = false;
            alertaImagem.style.display = 'inline';
            alertaImagem.innerHTML = `<p>Imagem inválida! Deve ser um arquivo de imagem.</p>`;
        }
    }
    
    if (valido) {
        if (campo.name === 'nome') {
            alertaNome.style.display = 'none';
        } else if (campo.name === 'valor') {
            alertaValor.style.display = 'none';
        } else if (campo.name === 'imagem') {
            alertaImagem.style.display = 'none';
        }
    }
    return valido;
}
