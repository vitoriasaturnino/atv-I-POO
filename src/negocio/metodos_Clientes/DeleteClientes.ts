import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Delete from "../delete";
import ListagemClientes from "./ListagemClientes";

export default class DeleteCliente extends Delete {
  private clientes: Array <Cliente>

  constructor( clientes:Array <Cliente> ){
      super()
      this.clientes = clientes
  }

  listaClientes(){
    let listaCLientes = new ListagemClientes(this.clientes);
    listaCLientes.listar()
    let entrada = new Entrada()

    let cpf = entrada.receberTexto("Informe o CPF do cliente que deseja deletar: ")
        let indice = this.clientes.findIndex( i => i.getCpf.getValor === cpf)
        this.clientes.splice(indice, 1)
        return
  }

  public delete(): void {
    this.listaClientes()
    console.log('Cliente foi excluido com sucesso!')
}
}