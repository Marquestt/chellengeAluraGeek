import { conectaAPI } from "./conectaApi.js";

const card = document.querySelector('[data-produtos]');

export default function constroiCard(imagem, nome, valor, id) {
    const produto = document.createElement('div');

    produto.className = 'cardProduto';
    produto.innerHTML = `
            <img src=${imagem} alt="Imagem do Produto"  class="imagemProduto" width="176px" height="174px">
            <p class="paragrafoProduto">${nome}</p>
            <p class="paragrafoValor">$ ${valor}<button type="button" class="botaoLixo" data-id="${id}"><img src="assets/trash.svg" alt="Icone Lixo" class="iconTrash"></button></p>
    `

    return produto;
}

async function cardProdutos() {
    try {
        const cardApi = await conectaAPI.cardProdutos();
        cardApi.forEach(elemento => card.appendChild(constroiCard(elemento.imagem, elemento.nome, elemento.valor)));
    }
    catch {
        card.innerHTML = `<h2 class="tituloErro">Não foi possível carregar a lista de produtos</h2>`
    }
}

cardProdutos();
