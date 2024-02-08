import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adiciona(negocio:Negociacao):void {
        this._negociacoes.push(negocio);
        
    }

    list(){
        return this._negociacoes;
    }
}