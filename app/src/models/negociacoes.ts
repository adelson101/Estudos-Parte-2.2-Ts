import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../util/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    public adiciona(negocio:Negociacao):void {
        this.negociacoes.push(negocio);
    }

    public list(): readonly Negociacao[] {
        return this.negociacoes;
    }

    ObjetoString(): string {
        return JSON.stringify(this.negociacoes);
    }

    public ehIgual(objeto: Negociacoes):boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.list());
    }

}