import Produto from "../modelo/produto";
import Cadastro from "../negocio/cadastro";

export default class geraProduto extends Cadastro{
  private produtos: Array<Produto>

  constructor(produtos: Array<Produto>){
    super();
    this.produtos = produtos;
  }

  public cadastrar(): void {
    listaProdutos.forEach(listaProdutos=>{
      let nome: string;
      let valor: any;
      let id: any;

      nome = listaProdutos.nome;
      valor = listaProdutos.valor;
      id = listaProdutos.id;

      const NovoProduto = new Produto(
          nome,
          valor,
          id
      );
      this.produtos.push(NovoProduto)

    })
  }

}