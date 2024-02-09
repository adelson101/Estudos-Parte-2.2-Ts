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
}
