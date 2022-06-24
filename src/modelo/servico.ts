export default class Servico {
    private id!: string;
    public nome!: string;
    public valor!: number;

    constructor(id: string, nome: string, valor: number){
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }

    public get getId(): string{
        return this.id;
    }
}