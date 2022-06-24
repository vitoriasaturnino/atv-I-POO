import Listagem from "../listagem";
import Servico from "../../modelo/servico";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos

    }
    public listar(): void {
        console.log(`\nListagem de servicos cadastrados: \n`);
        this.servicos.forEach( servico => {
            console.log(`Código identificador do serviço: ${servico.getId}`);
            console.log(`Nome do serviço: ${servico.nome}`);
            console.log(`Preço do serviço R$: ${servico.valor}`);
            console.log("\n---------------------------------------------\n");
        })
        console.log(`\n`);
    }
}