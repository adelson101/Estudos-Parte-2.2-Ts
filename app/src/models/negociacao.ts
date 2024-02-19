import { Imprimivel } from "../util/imprimivel.js";

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly _quantidade: number,
        public readonly _valor:number
    ) {}

    get data(): Date{
        const data = new Date(this._data.getTime()); 
        return data;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    public static AhCriar(stringData: string, stringQuantidade: string, stringValor: string): Negociacao {
        const exp = /-/g; 
        const data = new Date(stringData.replace(exp,","));
        const quantidade = parseInt(stringQuantidade);
        const valor = parseFloat(stringValor);
        
        return new Negociacao(data,quantidade,valor);
    }

    public ehIgual(negociacao:Negociacao):boolean {
        return this.data.getDate()===negociacao.data.getDate() && this.data.getMonth()===negociacao.data.getMonth() && this.data.getFullYear()===negociacao.data.getFullYear() 
        && this._quantidade===negociacao._quantidade && this._valor===negociacao._valor;
    }

    ObjetoString(): string {
        return `
            Data: ${this._data}\n
            Quantidade: ${this._quantidade}\n
            Valor: ${this._valor}
        `;
    }
}