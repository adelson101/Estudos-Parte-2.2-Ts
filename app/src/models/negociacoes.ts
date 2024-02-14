import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negocio:Negociacao):void {
        this.negociacoes.push(negocio);
    }

    public list(): readonly Negociacao[] {
        return this.negociacoes;
    }
}