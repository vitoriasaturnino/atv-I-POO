import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro{
    private servicos: Array<Servico>
    private entrada: Entrada;

    constructor(servico: Array<Servico>){
        super();
        this.servicos = servico;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log("\n Início do Cadastro de Serviços \n");

        //dados do servico
        let id = this.entrada.receberTexto("Informe o código de identificação do serviço: ");
        let nome = this.entrada.receberTexto("Informe o nome do servico: ");
        let preco = this.entrada.receberNumero("Informe o valor do serviço R$: ");

        let servico = new Servico(id, nome, preco);
        this.servicos.push(servico);
    }
}
