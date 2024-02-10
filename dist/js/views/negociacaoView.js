import { Negociacoes } from "../models/negociacoes";
export class NegociacoesView extends Negociacoes {
    constructor(id) {
        super();
        this.tabela = document.querySelector(id);
        this.tabela.innerHTML = this.template();
        this.tabelaCorpo = document.querySelector('#tabelaBody');
    }
    adicionarTabela() {
        this.list().forEach((lista) => {
            this.tabelaCorpo.innerHTML += `
                <tr>
                    <tb>${lista.data}</tb>
                    <tb>${lista._quantidade}</tb>
                    <tb>${lista._valor}</tb>
                </tr>
            `;
        });
    }
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody id="tabelaBody">
                </tbody>
            </table>
        `;
    }
}
