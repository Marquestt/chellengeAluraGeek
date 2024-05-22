export default function validadorFormulario(campo) {    
    const alerta = ''

    if(campo.name == 'nome' && campo.value.length < 3) {
        alerta = document.querySelector('.alertaNome')
        alerta.style.display = 'inline';
        alerta.innerHTML = `<p>Nome inválido!</p>`
    }
    else if(campo.name == valor && !/^\d+$/.test(campo)){
        alerta = document.querySelector('.alertaValor');
        alerta.style.display = 'inline';
        alerta.innerHTML = `<p>Valor inválido!</p>`
    }
    else if(campo.nome == 'imagem' && campo.value != `${imagem}.jpg`){
        alerta = document.querySelector('.alertaImagem');
        alerta.style.display = 'inline';
        alerta.innerHTML = `<p>Imagem inválido!</p>`
    }
    else {
        alerta.innerHTML = '';
    }
}
