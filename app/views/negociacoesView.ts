import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
    private elemento: HTMLTableElement;
    
    constructor(select: string) {
        this.elemento = document.querySelector(select);
    }

    template(model: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${model.list().map( negociacao => {
                    return `<tr>
                        <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao._valor}</td>
                    </tr>`;
                }).join('')}
                </tbody>
            </table>
        `;
    }

    Update(model: Negociacoes): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    
}