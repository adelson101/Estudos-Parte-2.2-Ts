import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
     private inputData: HTMLInputElement;
     private inputQuantidade: HTMLInputElement;
     private inputValor: HTMLInputElement;

     private negociacoesView = new NegociacoesView('#negociacoesView');
     private mensagemView = new MensagemView('#mensagemView');
     private negociacoes = new Negociacoes();

     constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.Update(this.negociacoes);
     }

     public adicionar():void {
        const NovaNegociacao = this.criarNegociacao();
        if ( NovaNegociacao.data.getDay() > 0 && NovaNegociacao.data.getDay() < 6) {         
         this.negociacoes.adiciona(NovaNegociacao);
         this.AtualizaView();
         this.limparFormulario();
        } else {
            this.mensagemView.Update('Apenas negociações em dias úteis são aceitas');
        }
     }

     private criarNegociacao():Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp,","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(data,quantidade,valor);
     }

     private limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
     }

     private AtualizaView():void {
         this.negociacoesView.Update(this.negociacoes);
         this.mensagemView.Update('Cadastrado com Sucesso');
     }
}