import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import SwitchCaseCliente from "./switchCases/clientes";
import SwitchCaseProdutos from "./switchCases/produtos";
import SwitchCaseServicos from "./switchCases/servicos";
import SwitchCaseListasAtvi from "./switchCases/listasAtvi";
import MockClientes from "../mock/clientes";

console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty")
let empresa = new Empresa()
let execucao = true

// Lista de clientes para teste
// let mockClientes = new MockClientes(empresa.getClientes)
// mockClientes.cadastrar();

while (execucao) {
    console.log("Opções:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Produtos");
    console.log("3 - Serviços");
    console.log("4 - Listas (atvi)");
    console.log("0 - Sair");

    let entrada = new Entrada()
    let opcao = entrada.receberNumero("Por favor, escolha uma opção: ")

    switch (opcao) {
        case 1:
            let switch_case_cliente = new SwitchCaseCliente(empresa)
            switch_case_cliente.listar()
            break;

        case 2:
            let switch_case_produtos = new SwitchCaseProdutos(empresa)
            switch_case_produtos.listar()
            break;

        case 3:
            let switch_case_servicos = new SwitchCaseServicos(empresa)
            switch_case_servicos.listar()
            break;

        case 4:
            let switch_case_listas_atvi = new SwitchCaseListasAtvi(empresa)
            switch_case_listas_atvi.listar()
            break;

        case 0:
            execucao = false
            console.log("Saindo")
            break;
        default:
            console.log("Insira uma opção válida")
    }
}