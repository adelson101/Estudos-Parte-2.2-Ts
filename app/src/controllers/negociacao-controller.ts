import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecusao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
     private inputData: HTMLInputElement;
     private inputQuantidade: HTMLInputElement;
     private inputValor: HTMLInputElement;

     private negociacoesView = new NegociacoesView('#negociacoesView',true);
     private mensagemView = new MensagemView('#mensagemView');
     private negociacoes = new Negociacoes();

     constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.Update(this.negociacoes);
     }

     @logarTempoDeExecucao()
     public adicionar():void {
        const NovaNegociacao = Negociacao.AhCriar(
         this.inputData.value,
         this.inputQuantidade.value,
         this.inputValor.value
        );
        if(!this.DiaUtil(NovaNegociacao.data) ) {
            this.mensagemView.Update('Apenas negociações em dias úteis são aceitas');
            return;
         }
         this.negociacoes.adiciona(NovaNegociacao);
         this.AtualizaView();
         this.limparFormulario();
     }

     private DiaUtil(data: Date) {
         return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
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