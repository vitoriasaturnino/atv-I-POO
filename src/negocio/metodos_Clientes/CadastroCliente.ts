import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log("\nInício do cadastro do cliente");

        //entrada de dados do cliente

        let nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ")
        let nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ")
        let genero = this.entrada.receberTexto("Por favor informe o genero: (F/M): ")
        let valor = this.entrada.receberTexto("Por favor informe o número do CPF: ");
        let data = this.entrada.receberTexto("Por favor informe a data de emissão do cpf: (dd/mm/yyyy) ");
        let valor_rg = this.entrada.receberTexto("Por favor informe o número do RG: ");
        let data_rg = this.entrada.receberTexto("Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: ");
        let numeroTelefone = this.entrada.receberTexto("Por favor informe o telefone: (DDD) nnnn-nnnn ");

        //formatanto data
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()

        //formatando telefone
        let partesTelefone =  numeroTelefone.split(')')
        numeroTelefone = partesTelefone[0] + ")-" + partesTelefone[1]
        let telefoneCliente = numeroTelefone.split("-")
        let ddd = new String(telefoneCliente[0].valueOf()).valueOf()
        let numero = new String(telefoneCliente[1].valueOf()).valueOf()

        //instanciando classes
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let dataEmissao_rg = new Date(ano, mes, dia)
        let rg = new RG(valor_rg, dataEmissao_rg);
        let telefone = new Telefone(ddd, numero)
        let cliente = new Cliente(nome, nomeSocial, genero, cpf);

        cliente.getRgs.push(rg)
        cliente.getTelefones.push(telefone)
        this.clientes.push(cliente)

        console.log("\nCadastro concluído com sucesso!\n");
    }
}