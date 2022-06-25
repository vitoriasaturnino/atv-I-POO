import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListaProdutosServicosMaisConsumidos extends Listagem{
    private clientes: Array<Cliente>

    constructor( clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void { 

        let produtos_consumidos: any = [];
        this.clientes.map( cliente =>{
            cliente.getProdutosConsumidos.forEach(produto => {
                let nome = produto.nome;
                let quantidade = produtos_consumidos[produto.nome] = ( produtos_consumidos[produto.nome] || 0 ) + 1
                produtos_consumidos.push({
                    nome: nome,
                    quantidade: quantidade
                });
            });
        });

        let ordena_produto = produtos_consumidos.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
          return b.quantidade - a.quantidade }).slice(0, 1)

          console.log("\nProduto mais consumido: ");
          ordena_produto.forEach((consumidos: { nome: string, quantidade: string}) => {
          console.log(`Nome: ${consumidos.nome}`);
          console.log(`Quantidade: ${consumidos.quantidade}`);
          console.log
          ("\n-------------------------------------------------------\n");
        })

        let servicos_consumidos: any = [];
        this.clientes.map(cliente =>{
            cliente.getServicosConsumidos.forEach(servico =>{
                let nome = servico.nome
                let quantidade = servicos_consumidos[servico.nome] = (servicos_consumidos[servico.nome] || 0) + 1
                servicos_consumidos.push({
                    nome:nome,
                    quantidade:quantidade
                })
            })
        })

        let ordena_servico = servicos_consumidos.sort( (a: { quantidade: number; }, b: { quantidade: number; })  => {
          return b.quantidade - a.quantidade }).slice(0, 1)

          console.log("\nServiço mais consumido:")
          ordena_servico.forEach((consumidos: { nome: string, quantidade: string}) => {
          console.log(`Nome: ${consumidos.nome}`);
          console.log(`Quantidade: ${consumidos.quantidade}`);
          console.log
          ("\n-------------------------------------------------------\n");
      })
    }
}