export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static AhCriar(stringData, stringQuantidade, stringValor) {
        const exp = /-/g;
        const data = new Date(stringData.replace(exp, ","));
        const quantidade = parseInt(stringQuantidade);
        const valor = parseFloat(stringValor);
        return new Negociacao(data, quantidade, valor);
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate() && this.data.getMonth() === negociacao.data.getMonth() && this.data.getFullYear() === negociacao.data.getFullYear()
            && this._quantidade === negociacao._quantidade && this._valor === negociacao._valor;
    }
    ObjetoString() {
        return `
            Data: ${this._data}\n
            Quantidade: ${this._quantidade}\n
            Valor: ${this._valor}
        `;
    }
}
