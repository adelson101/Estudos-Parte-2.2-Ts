export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negocio) {
        this._negociacoes.push(negocio);
    }
    get negociacoes() {
        return this._negociacoes;
    }
}
