export class NegociacaoView {
    private tabela: HTMLElement;

    constructor(tabela){
        this.tabela = tabela;
    }

    template(): string {
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