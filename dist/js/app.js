import { Negociacao } from './models/negociacao.js';
const NovoNegocio = new Negociacao(new Date(), 10, 100);
console.log(NovoNegocio);
console.log(NovoNegocio.volume);
