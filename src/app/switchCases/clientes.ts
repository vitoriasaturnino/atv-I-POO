import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import CadastroCliente from "../../negocio/metodos_Clientes/CadastroCliente";
import DeleteCliente from "../../negocio/metodos_Clientes/DeleteClientes";
import ListagemClientes from "../../negocio/metodos_Clientes/ListagemClientes";
import UpdateCliente from "../../negocio/metodos_Clientes/UpdateClientes";
import Listagem from "../../negocio/listagem";

export default class SwitchCaseCliente extends Listagem{
  private empresa: Empresa

  constructor(empresa:Empresa){
    super();
    this.empresa = empresa;
  }

  switchh_case_cliente(empresa:Empresa){
    let chave:boolean = true;

    console.log("Menu do Cliente");

    while(chave){
      console.log("Clientes: \n");
    console.log("1 - Cadastrar cliente")
      if(empresa.getClientes.length)
        console.log("2 - Listar clientes");
      if(empresa.getClientes.length)
        console.log("3 - Atualizar dados do cliente.");
      if(empresa.getClientes.length)
        console.log("4 - Deletar dliente.");
      console.log("0 - Sair\n");

      let entrada = new Entrada()
      let opcao = entrada.receberNumero("Escolha uma opção: ");

      switch(opcao){
        case 1:
          let cadastro = new CadastroCliente(empresa.getClientes);
          cadastro.cadastrar();
          break;

        case 2:
          let listagem = new ListagemClientes(empresa.getClientes);
          listagem.listar();
          break;

        case 3:
          let update = new UpdateCliente(empresa.getClientes);
          update.update();
          break;

        case 4:
          let excluir = new DeleteCliente(empresa.getClientes);
          excluir.delete();
          break;

        case 0:
          return;

        default:
           console.log("\nInsira uma opção válida ");
      }
    }
  }

  public listar(): void {
      this.switchh_case_cliente(this.empresa)
  }
}