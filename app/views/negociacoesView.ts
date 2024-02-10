import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes>{

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
    
}