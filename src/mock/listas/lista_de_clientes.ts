import Telefone from "../../modelo/telefone";

const listaDeClientes: any = [
  {
    nome: 'Cliente 1',
    nomeSocial: 'Cliente Top 1',
    genero: 'M',
    cpf: {
      valor: '5',
      dataEmissao: new Date(24,12,2000)
    },
    rg: {
      valor: '1',
      dataEmissao: new Date(24,12,2000)
    },
    telefone: new Telefone('(99)','9999-9999')
  }
]

export default listaDeClientes;