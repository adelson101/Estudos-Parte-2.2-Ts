import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecusao.js";
import { domInject } from "../decorators/domInject.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoesServices.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";

export class NegociacaoController {
    @domInject('#data')
     private inputData: HTMLInputElement;
     @domInject('#quantidade')
     private inputQuantidade: HTMLInputElement;
     @domInject('#valor')
     private inputValor: HTMLInputElement;
     
     private negociacoesView = new NegociacoesView('#negociacoesView');
     private mensagemView = new MensagemView('#mensagemView');
     private negociacoes = new Negociacoes();

     private negociacaoServico = new NegociacoesService();

     constructor() {
        this.negociacoesView.Update(this.negociacoes);
     }

     @logarTempoDeExecucao(true)
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
         if(this.negociacoes.ehIgual(this.negociacoes)){
            this.negociacoes.adiciona(NovaNegociacao);
         }
         console.table(NovaNegociacao.ObjetoString());
         this.AtualizaView();
         this.limparFormulario();
     }

    async importarDados() {        
        const DadosJson = await this.negociacaoServico.obterNegociacoesDoDia();
        
        let DadosJsonFilter = DadosJson.filter( (NegociacaoDoDia:Negociacao) => {
            return !this.negociacoes.list().some( (negociacao:Negociacao) => negociacao.ehIgual(NegociacaoDoDia) );
        });
        console.log(DadosJsonFilter);
        

        DadosJsonFilter.forEach( (negociacao: Negociacao) => {    
            this.negociacoes.adiciona(negociacao);
        });

        console.log(this.negociacoes.ObjetoString());
        this.AtualizaView();
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