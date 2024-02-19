import { NegociacaoDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService 
{
    public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
        const Bd = await fetch('http://localhost:8080/dados');
        const DadosJson = await Bd.json();
        const DadosMapeados = await DadosJson.map( (DadosDeHoje:NegociacaoDoDia) => { return new Negociacao(new Date(),DadosDeHoje.vezes,DadosDeHoje.montante); });
        return DadosMapeados;
    }
    
}