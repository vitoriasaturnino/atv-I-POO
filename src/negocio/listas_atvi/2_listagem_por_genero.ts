import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";


export default class ListagemByGenero extends Listagem{
    private clientes:Array<Cliente>
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes
    }

    public listar(): void {
        let m: Cliente[] = [];
        let f: Cliente[] = [];

        this.clientes.forEach( clientes => {
            if( clientes.genero === "M"){
                m.push(clientes);
            }if( clientes.genero === "F"){
                f.push(clientes);
            }
        })       

        console.log("Listagem de Clientes por Gênero");
        console.log("Masculino: \n");

        //Masculino
        console.log(`\n----------------------------------------\n`);
        m.forEach(m=>{
          console.log(`Nome: ${m.nome}`);
          console.log(`Nome Social:` + m.nomeSocial);
          console.log(`Cpf:` + m.getCpf.getValor);
          console.log(`Telefone: ` + m.getTelefones[0].getTelefone + "\n");

          console.log(`------------------`)
          console.log("\n");
        })

        //Feminino
        console.log("Feminino:");
        console.log("\n");
        f.forEach(f=>{
            console.log(`Nome:` +f.nome);
            console.log(`Nome Social:` +f.nomeSocial);
            console.log(`Cpf:` +f.getCpf.getValor);
            console.log(`Telefone: ` + f.getTelefones[0].getTelefone + "\n");

            console.log(`------------------`)
            console.log("\n");
        })
    }
}