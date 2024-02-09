export class NegociacaoView {
    constructor() {
        this.Tabela;
    }
    template() {
        return `
            <table>
                <thead class="table table-hover table-bordered">
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        `;
    }
}
