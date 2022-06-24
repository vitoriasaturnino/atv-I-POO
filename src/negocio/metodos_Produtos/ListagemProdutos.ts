import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }

    public listar(): void {
        console.log(`\nListagem de produtos cadastrados: \n`);
        this.produtos.forEach(produto => {
            console.log(`Código de identificação do produto: ${produto.getid}`);
            console.log(`Nome do produto: ${produto.nome}`);
            console.log(`Valor do Produto R$: ${produto.valor}`);
            console.log("\n---------------------------------------------\n");
        })
        console.log(`\n`);
    }
}