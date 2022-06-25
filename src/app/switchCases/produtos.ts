import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../../negocio/listagem";
import CadastroProduto from "../../negocio/metodos_Produtos/CadastroProdutos";
import DeleteProduto from "../../negocio/metodos_Produtos/DeleteProdutos";
import ListagemProdutos from "../../negocio/metodos_Produtos/ListagemProdutos";
import UpdateProdutos from "../../negocio/metodos_Produtos/UpdateProdutos";

export default class SwitchCaseProdutos extends Listagem{
  private empresa: Empresa

  constructor(empresa:Empresa){
    super();
    this.empresa = empresa;
  }

  SwitchCaseServicos(empresa:Empresa){
    let chave = true;

    console.log("Menu do Produto");

    while(chave){

      console.log("Produtos: \n");
      console.log("1 - Cadastrar produto");
      if(empresa.getProdutos.length)
        console.log("2 - Listar produtos");
      if(empresa.getProdutos.length)
        console.log("3 - Atualizar Produto.");
      if(empresa.getProdutos.length)
        console.log("4 - Deletar Produto.");
      console.log("0 - Sair\n");

      let entrada = new Entrada()
      let opcao = entrada.receberNumero("Escolha uma opção: ");

      switch(opcao){
        case 1:
          let cadastro = new CadastroProduto(empresa.getProdutos)
          cadastro.cadastrar()
          break;

        case 2:
          let listagem = new ListagemProdutos(empresa.getProdutos)
          listagem.listar()
          break;

        case 3:
          let update = new UpdateProdutos(empresa.getProdutos)
          update.atualizar()
          break;

        case 4:
          let excluir = new DeleteProduto(empresa.getProdutos)
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
      this.SwitchCaseServicos(this.empresa)
  }
}