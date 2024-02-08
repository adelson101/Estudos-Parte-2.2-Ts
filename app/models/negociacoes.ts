import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negocio:Negociacao):void {
        this._negociacoes.push(negocio);
        
    }

    get negociacoes(){
        return this._negociacoes;
    }
}