import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Update from "../update";
import ListagemServicos from "./ListagemServicos";

export default class UpdateServico extends Update{
  private servicos: Array <Servico>
  private entrada: Entrada

  constructor(servicos: Array <Servico>){
    super()
    this.servicos = servicos
    this.entrada = new Entrada()
  }

  public atualizar(): void {
    console.log("Atualização de Serviços.");

    const listServ = new ListagemServicos( this.servicos )
    listServ.listar()

    let idServico = this.entrada.receberTexto("Informe o código de identificação do produto que deseja atualizar: \n")

    this.servicos.forEach( servicos => {

      if (idServico === servicos.getId){  

          let validacao = true
          while (validacao) {   

            while (validacao) {
              console.log("\n Selecione uma opção para atualizar: \n");
              console.log(`--------------------------------------\n`);                    
              console.log("\n Dados para atualização: \n");
              console.log("[1] Nome do Serviço");
              console.log("[2] Serviço");
              console.log("[0] Sair");
              console.log(`--------------------------------------\n`);
            }

              let entrada = new Entrada()
              let opcao = entrada.receberNumero("Escolha uma opção: ")
              console.log('\n');

              switch (opcao) {
                  case 1:
                    let nome = entrada.receberTexto("Informe o novo nome do serviço: ");
                    servicos.nome = nome;
                    console.log("Nome atualizado com Sucesso !");
                    break;

                  case 2:
                    let valor = entrada.receberNumero("Informe o novo preço do serviço R$: ");
                    servicos.valor = valor;
                    console.log("Valor atualizado com Sucesso !");
                    break;

                  case 0:
                    validacao = false
                    console.log(" Saindo.");
                    break;

                  default:
                    console.log("Insira uma opção válida");
                    break;
              }
          }
      }
    })
  }
}