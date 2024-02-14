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
