import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
  private clientes: Array<Cliente>

  constructor(clientes: Array<Cliente>){
    super();
    this.clientes = clientes;
  }

  public listar(): void {
      let lista_Ordem_Alfabetica = this.clientes.sort((a, b) => parseInt(a.getCpf.getValor) - parseInt(b.getCpf.getValor));

      console.log("\nLista de clientes cadastrados: \n");

      lista_Ordem_Alfabetica.forEach((cliente) => {
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`Genero: ${cliente.genero}`);
        console.log(`CPF: ${cliente.getCpf}`);
        console.log(`RG: ${cliente.getRgs[0]}`);
        console.log(`Telefone: ${cliente.getTelefones[0]} \n`);
        console.log("\n---------------------------------------------\n");
      })
  };
}