import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "../delete";
import ListagemServicos from "./ListagemServicos";

export default class DeletarServico extends Delete{
    private servicos: Array <Servico>

    constructor (servicos: Array <Servico>){
        super();
        this.servicos = servicos;
    }

    listarServicos(){
        let listaServicos = new ListagemServicos(this.servicos);
        listaServicos.listar();
        let entrada = new Entrada();
        let id = entrada.receberTexto("Informe o código de identificação do serviço: ");
        let indice = this.servicos.findIndex(i=> i.getId === id);
        this.servicos.splice(indice,1);
        return;
    }

    public delete(): void{
        this.listarServicos()
        console.log("Serviço deletado com sucesso");        
    }
}