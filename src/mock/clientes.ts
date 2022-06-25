import Cliente from "../modelo/cliente";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";
import CPF from "../modelo/cpf";
import Cadastro from "../negocio/cadastro";

import listaDeClientes from "./listas/lista_de_clientes";

export default class MockClientes extends Cadastro {
  private clientes: Array<Cliente>

  constructor(clientes: Array<Cliente>) {
    super();
    this.clientes = clientes;
  }

  public cadastrar(): void {
    listaDeClientes.forEach(cliente => {
      let nome: string;
      let nomeSocial: string;
      let genero: string;
      let cpf: any;
      let rg: any;
      let telefone: any;

        nome = cliente.nome;  
        nomeSocial = cliente.nomeSocial;       
        genero = cliente.genero;
        rg.push(new RG(cliente.rg.valor, cliente.rg.dataEmissao));
        cpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao)
        telefone.push(cliente.telefone);

        const novoCliente = new Cliente(
            nome,
            nomeSocial,
            genero,
            cpf
        );
        this.clientes.push(novoCliente)      
      }
    );
  }
}