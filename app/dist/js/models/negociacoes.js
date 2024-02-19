export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negocio) {
        this.negociacoes.push(negocio);
    }
    list() {
        return this.negociacoes;
    }
    ObjetoString() {
        return JSON.stringify(this.negociacoes);
    }
}
