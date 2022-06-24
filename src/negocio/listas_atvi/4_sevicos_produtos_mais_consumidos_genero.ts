import Cliente from "../../modelo/cliente"
import Listagem from "../listagem"


export default class ListagemGeneroConsumo extends Listagem {
  private clientes: Array<Cliente>
  
  constructor(clientes: Array<Cliente>){
    super()
    this.clientes = clientes
  }

  public listar(): void {
    let cliente_genero: any;

    cliente_genero = this.clientes.reduce(( acumulador, current ) => {

      current.getProdutosConsumidos.forEach( produto => {
        if(acumulador[current.genero][`Produto_${produto.getId}`]){
          acumulador[current.genero][`Produto_${produto.getId}`].quantidade++
        }else{
          acumulador[current.genero][`Produto_${produto.getId}`] = { quantidade:1, nome:produto.nome}
        }
      })
      current.getServicosConsumidos.forEach( servico => {
        if(acumulador[current.genero][`Servico_${servico.getId}`]){
          acumulador[current.genero][`Servico_${servico.getId}`].quantidade++
        }else{
          acumulador[current.genero][`Servico_${servico.getId}`] = {quantidade:1, nome:servico.nome}
        }
    })
      
      return acumulador

    },{Masculino:{}, Feminino:{}})

    let ordenado_masculino = Object.keys(cliente_genero.Masculino).map(k=>{
      const [tipo,id] = k.split("_")
      return {id, tipo, quantidade:cliente_genero.Masculino[k].quantidade, nome:cliente_genero.Masculino[k].nome}
    }).sort((a, b) => b.quantidade - a.quantidade).slice(0, 3)

    let ordenado_feminino = Object.keys(cliente_genero.Feminino).map( k => {
      const [tipo,id] = k.split("_")
      return {id, tipo, quantidade:cliente_genero.Feminino[k].quantidade, nome:cliente_genero.Feminino[k].nome}
    }).sort((a, b) => b.quantidade - a.quantidade).slice(0, 3)

    console.log("Serviços ou produtos maiss por gênero:");

    console.log(`Masculino`);
    ordenado_masculino.forEach( (items, index) => {
      console.log(`\n-------------------------------------------\n`);
      console.log(`${index + 1}°`);
      console.log(`Código de Identificação: ${items.tipo}: ${items.id}`);
      console.log(`Nome: ${items.tipo}: ${items.nome}`);
      console.log(`Quantidade: ${items.quantidade}\n`);
      console.log(`\n-------------------------------------------\n`);
    })

    console.log(`\n--------------------------------------\n`);

    console.log(`Feminino`);
    ordenado_feminino.forEach( (items, index) => {
      console.log(`${index + 1}°`);
      console.log(`Código de Identificação: produto: ${items.id}`);
      console.log(`Nome: ${items.tipo}: ${items.nome}`);
      console.log(`Quantidade: ${items.quantidade}\n`);
    })
  }
}