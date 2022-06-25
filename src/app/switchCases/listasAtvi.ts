import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import ListaMaiorConsumo from "../../negocio/listas_atvi/1_clientes_Consumiram_prod_serv";
import ListagemClientesGenero from "../../negocio/listas_atvi/2_listagem_por_genero";
import ListaProdutosServicosMaisConsumidos from "../../negocio/listas_atvi/3_produtos_servicos_mais_consumidos";
import ListagemGeneroConsumo from "../../negocio/listas_atvi/4_sevicos_produtos_mais_consumidos_genero";
import ListaMenorConsumo from "../../negocio/listas_atvi/5_clintes_menos_consumiram";
import ListagemConsumidoValor from "../../negocio/listas_atvi/6_clientes_mais_consumiram_valor";


export default class SwitchCaseListasAtvi extends Listagem{
    private empresa:Empresa

    constructor( empresa:Empresa ){
        super()
        this.empresa = empresa
    }

    SwitchCaseListasAtvi(empresa:Empresa){
        let execucao = true

        console.log(`Bem-vindo ao Menu de Listagem`)

        while(execucao){

            console.log("Listagens: \n");
            if(empresa.getClientes.length)
              console.log("1 - 10 clientes que mais consumiram produtos ou serviços, em quantidade\n");   
              console.log("2 - Listagem clientes por gênero.\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("3 - Listagem serviços ou produtos mais consumidos\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
              console.log("4 - Listagem serviços ou produtos mais consumidos por gênero\n");
            if(empresa.getServicos.length || empresa.getProdutos.length)
            console.log("5 - Listagem 10 clientes que menos consumiram produtos ou serviços\n");
            console.log("6 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade\n");
            console.log("0 - Voltar Para o Menu Principal\n");

            let entrada = new Entrada()
            let opcao = entrada.receberNumero("Escolha uma opção: ")

            switch (opcao) {
              case 1:
                let ListaMaior_consumo = new ListaMaiorConsumo(empresa.getClientes)
                ListaMaior_consumo.listar()
                break;

              case 2:
                let listagem_clientes_genero = new ListagemClientesGenero(empresa.getClientes)
                listagem_clientes_genero.listar()
                break;

              case 3:
                let  lista_produtos_servicos_mais_consumidos = new  ListaProdutosServicosMaisConsumidos(empresa.getClientes)
                lista_produtos_servicos_mais_consumidos.listar()
                break;

              case 4:
                let listagem_genero_consumo = new ListagemGeneroConsumo(empresa)
                listagem_genero_consumo.listar()
                break;

              case 5:
                  let lista_menor_consumo = new ListaMenorConsumo(empresa)
                  lista_menor_consumo.listar()
                  break;

              case 6:
                  let listagem_consumido_valor = new ListagemConsumidoValor(empresa.getClientes)
                  listagem_consumido_valor.listar()
                  break;

              case 0:
                  return
                  
              default:
                  break;

            }
        }
    }

    public listar(): void {
        this.SwitchCaseListasAtvi(this.empresa)
    }
}