import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro{
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\n Inicio do Cadastro do Produto.\n`);

          //dados do produto
          let id = this.entrada.receberTexto(`Informe o código de identificação do produto: `);
          let nome = this.entrada.receberTexto(`Informe o nome do produto: `);
          let valor = this.entrada.receberNumero(`Informe o valor do produto R$: `);

          //guardando produto
          let produto = new Produto(id, nome, valor);

          this.produtos.push(produto)
          console.log(`\n Cadastro de concluído :) \n`);
    }
        
}