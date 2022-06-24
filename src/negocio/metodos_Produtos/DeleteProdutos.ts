import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Delete from "../delete";
import ListagemProdutos from "./ListagemProdutos";

export default class DeleteProduto extends Delete{
    private produtos: Array <Produto>

    constructor (produtos: Array <Produto>){
        super();
        this.produtos = produtos;
    }

    listarProdutos(){
        let listaProdutos = new ListagemProdutos(this.produtos);
        listaProdutos.listar();
        let entrada = new Entrada();
        let id = entrada.receberTexto("Informe o código de identificaçõ do produto: ");
        let indice = this.produtos.findIndex(i => i.getId === id);
        this.produtos.splice(indice,1);
        return
    }

    public delete(): void {
        this.listarProdutos();
        console.log("Produto foi excluido com sucesso!");;        
    }
}