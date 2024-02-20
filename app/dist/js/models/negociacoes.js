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
    ehIgual(objeto) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.list());
    }
}
//# sourceMappingURL=negociacoes.js.map