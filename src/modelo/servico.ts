export default class Servico {
    public nome!: string;
    public valor!: string;

    constructor(nome: string, valor: string){
        this.nome = nome;
        this.valor = valor;
    }
}