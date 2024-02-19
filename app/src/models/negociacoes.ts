import { Imprimivel } from "../util/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel {
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

}