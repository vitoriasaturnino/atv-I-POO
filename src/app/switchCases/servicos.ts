import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import CadastroServico from "../../negocio/metodos_Servicos/CadasstrarServicos";
import ListagemServicos from "../../negocio/metodos_Servicos/ListagemServicos";
import UpdateServico from "../../negocio/metodos_Servicos/UpdateServicos";
import DeleteServico from "../../negocio/metodos_Servicos/DeleteServicos";

export default class SwitchCaseServicos extends Listagem{
  private empresa:Empresa

  constructor( empresa:Empresa ){
    super();
    this.empresa = empresa;
  }

  SwitchCaseServicos(empresa:Empresa){
    let chave = true;

    console.log("Menu do Serviço");

    while(chave){

      console.log("Serviços: \n");
      console.log("1 - Cadastrar serviço");
      if(empresa.getServicos.length)
        console.log("2 - Listar todos os serviços");
      if(empresa.getServicos.length)
        console.log("3 - Atualizar Dados do Serviço.");
      if(empresa.getServicos.length) 
        console.log("4 -Deletar Serviço.");
      console.log("[0] Voltar Para o Menu Principal\n");

      let entrada = new Entrada()
      let opcao = entrada.receberNumero("Escolha uma opção: ")

      switch (opcao) {
        case 1:
          let cadastro = new CadastroServico(empresa.getServicos)
          cadastro.cadastrar()
          break;

        case 2:
          let listagem = new ListagemServicos(empresa.getServicos)
          listagem.listar()
          break;

        case 3:
          let update = new UpdateServico(empresa.getServicos)
          update.atualizar()
          break;

        case 4:
          let excluir = new DeleteServico(empresa.getServicos)
          excluir.delete()
          break;

        case 0:
          return
        default:
          console.log("\nInsira uma opção válida ");

        }
    }
  }

  public listar(): void {
      this.SwitchCaseServicos(this.empresa);
  }
}