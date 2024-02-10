import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
     private inputData: HTMLInputElement;
     private inputQuantidade: HTMLInputElement;
     private inputValor: HTMLInputElement;

     private negociacoesView = new NegociacoesView('#negociacoesView');
     private negociacoes = new Negociacoes();

     constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.Update(this.negociacoes);
     }

     adicionar():void {
        const NovaNegociacao = this.criarNegociacao();
        this.negociacoes.adiciona(NovaNegociacao);
        this.negociacoesView.Update(this.negociacoes);
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