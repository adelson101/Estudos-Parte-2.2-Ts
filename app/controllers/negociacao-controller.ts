import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController extends Negociacoes {
     private inputData: HTMLInputElement;
     private inputQuantidade: HTMLInputElement;
     private inputValor: HTMLInputElement;

     constructor() {
        super();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
     }

     adicionar():void {
        const NovaNegociacao = this.criarNegociacao();
        this.adiciona(NovaNegociacao);
        this.limparFormulario();
     }

     criarNegociacao():Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp,","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(data,quantidade,valor);
     }

     limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
     }
}