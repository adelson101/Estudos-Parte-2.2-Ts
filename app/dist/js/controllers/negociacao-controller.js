var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { logarTempoDeExecucao } from "../decorators/LogarTempoDeExecusao.js";
import { domInject } from "../decorators/domInject.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoesServices.js";
import { MensagemView } from "../views/mensagemView.js";
import { NegociacoesView } from "../views/negociacoesView.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoes = new Negociacoes();
        this.negociacaoServico = new NegociacoesService();
        this.negociacoesView.Update(this.negociacoes);
    }
    adicionar() {
        const NovaNegociacao = Negociacao.AhCriar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.DiaUtil(NovaNegociacao.data)) {
            this.mensagemView.Update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        if (this.negociacoes.ehIgual(this.negociacoes)) {
            this.negociacoes.adiciona(NovaNegociacao);
        }
        console.table(NovaNegociacao.ObjetoString());
        this.AtualizaView();
        this.limparFormulario();
    }
    importarDados() {
        return __awaiter(this, void 0, void 0, function* () {
            const DadosJson = yield this.negociacaoServico.obterNegociacoesDoDia();
            let DadosJsonFilter = DadosJson.filter((NegociacaoDoDia) => {
                return !this.negociacoes.list().some((negociacao) => negociacao.ehIgual(NegociacaoDoDia));
            });
            console.log(DadosJsonFilter);
            DadosJsonFilter.forEach((negociacao) => {
                this.negociacoes.adiciona(negociacao);
            });
            console.log(this.negociacoes.ObjetoString());
            this.AtualizaView();
        });
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
    domInject('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    logarTempoDeExecucao(true)
], NegociacaoController.prototype, "adicionar", null);
//# sourceMappingURL=negociacao-controller.js.map