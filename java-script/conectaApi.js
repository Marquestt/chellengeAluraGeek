import { validarFormulario } from "./validaForm.js";

async function cardProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function guardar(nome, valor, imagem, id) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: `${valor}`,
            imagem: imagem,
            id: id
        })
    });
    if(!conexao.ok) {
        throw new Error("Não foi possível guardar o produto");
    }
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function excluirProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
    window.location.reload();
    if (!conexao.ok) {
        throw new Error("Não foi possível excluir o produto");
    }

    return await conexao.json();
}

export const conectaAPI = {
    cardProdutos,
    guardar,
    excluirProduto
}
