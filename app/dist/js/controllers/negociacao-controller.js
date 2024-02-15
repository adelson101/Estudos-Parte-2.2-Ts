var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecusao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.Update(this.negociacoes);
    }
    adicionar() {
        const NovaNegociacao = Negociacao.AhCriar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.DiaUtil(NovaNegociacao.data)) {
            this.mensagemView.Update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(NovaNegociacao);
        this.AtualizaView();
        this.limparFormulario();
    }
    DiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    AtualizaView() {
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update('Cadastrado com Sucesso');
    }
}
__decorate([
    logarTempoDeExecucao()
], NegociacaoController.prototype, "adicionar", null);
