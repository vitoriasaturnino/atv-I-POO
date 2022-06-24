import Entrada from "../../io/entrada"
import Produto from "../../modelo/produto";
import Update from "../update";
import ListagemProdutos from "./ListagemProdutos";

export default class UpdateProdutos extends Update{
  private produtos: Array<Produto>
  private entrada: Entrada

  constructor(produtos: Array<Produto>){
      super()
      this.produtos = produtos
      this.entrada = new Entrada()
  }

  public atualizar(): void {
    console.log("Atualização de Produtos");

    const listProd = new ListagemProdutos(this.produtos)
    listProd.listar()

    let id = this.entrada.receberTexto("\n Informe o código de identificação do produto que deseja atualizar: \n")
    
    this.produtos.forEach(produto => {
        if(id === produto.getId){

          let validacao = true

          while (validacao) {
            console.log("\n Selecione uma opção para atualizar: \n");
            console.log(`--------------------------------------\n`);                    
            console.log("\n Dados para atualização: \n");
            console.log("[1] Nome do Produto");
            console.log("[2] Preço");
            console.log("[0] Sair");
            console.log(`--------------------------------------\n`);
          }

        let entrada = new Entrada()
        let opcao = entrada.receberNumero("Escolha uma opção: ")
        console.log("\n");

        switch (opcao) {
            case 1:
                let nome = this.entrada.receberTexto("Informe o novo nome do Produto: ");
                produto.nome = nome;
                console.log("Nome atualizado com Sucesso !\n");
                break;

            case 2:
              let valor = this.entrada.receberNumero("Informe o novo preço R$: ");
              produto.valor = valor;
              console.log("Valor atualizado com Sucesso !\n");
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
    })
  }
}
