import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./View.js";

export class NegociacoesView extends View<Negociacoes>{

    @escape
    protected template(model: Negociacoes): string {
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
                        <td>${this.formatar(negociacao.data)}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao._valor}</td>
                    </tr>`;
                }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
    
}