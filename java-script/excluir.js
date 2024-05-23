import { conectaAPI } from "./conectaApi.js";

async function excluirProduto(id) {
    try {
        await conectaAPI.excluirProduto(id);

        const elementoExcluir = document.querySelector(`[data-id="${id}"]`);
        if (elementoExcluir) {
            elementoExcluir.remove();
            alert('Produto excluído com sucesso!');
        } else {
            alert('Elemento não encontrado.');
        }
    } catch (e) {
        console.error('Erro ao excluir produto:', e);
        alert('Não foi possível excluir o produto selecionado.');
    }
}

document.addEventListener('click', (evento) => {
    if (evento.target.closest('.botaoLixo')) {
        const botao = evento.target.closest('.botaoLixo');
        const idProduto = botao.dataset.id;
        excluirProduto(idProduto);
    }
});
