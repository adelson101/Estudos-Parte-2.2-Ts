import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negocio = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        negocio.adicionar();
    });
} else {
    throw Error('Não foi possivel inicializar a aplicação. Verifique se o forme foi inserido corretamente!');
}

const botaoImporta = document.querySelector('#botao-importa');

if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        negocio.importarDados();
    }); 
} else {
    throw Error('Botão importa não foi encontrando!');
}

