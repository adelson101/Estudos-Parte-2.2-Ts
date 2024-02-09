import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoView } from "./views/negociacaoView.js";
const negocio = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    negocio.adicionar();
});
const negociacoesView = new NegociacaoView();
const template = negociacoesView.template();
console.log(template);
