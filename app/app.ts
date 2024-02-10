import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negocio = new NegociacaoController();
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    negocio.adicionar();
});

