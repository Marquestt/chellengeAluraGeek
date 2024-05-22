import { conectaAPI } from "./conectaApi.js";

const botaoExcluir = document.querySelectorAll('.botaoLixo');

// async function excluirProduto(id) {
//     try {
//         await conectaAPI.excluirProduto(id);

//         const elementoExcluir = document.getElementById(id);
//         elementoExcluir.remove();
//     } catch (error) {
//         console.error('Erro ao excluir produto:', error);
//         alert('Não foi possível excluir o produto selecionado.');
//     }
// }

// botoesExcluir.forEach(botao => {
//     botao.addEventListener('click', () => {
//         const idProduto = botao.dataset.id;

//         excluirProduto(idProduto);
//     });
// });

async function excluir() {
	const botao = document.querySelectorAll('.botaoLixo');
	botao.forEach((btn) => {
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			excluirProduto(botaoExcluir.id)
			// window.location.reload();
		});
	});
}
export default excluir;