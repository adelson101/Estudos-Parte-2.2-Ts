import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negocio:Negociacao):void {
        this.negociacoes.push(negocio);
    }

    list(): readonly Negociacao[] {
        return this.negociacoes;
    }
}