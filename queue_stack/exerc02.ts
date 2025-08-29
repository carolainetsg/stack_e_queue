import leia=require("readline-sync");
import { Stack } from "../Stack";

const pilha=new Stack<string>();
let continuar:boolean=true;
let opcao:number;
do{
console.log("               MENU:                ");
console.log("************************************");
console.log("");
console.log("     1 - Adicionar Livro na Pilha");
console.log("     2 - Listar todos os Livros");
console.log("     3 - Retirar Livro da Pilha");
console.log("     0 -Sair");
console.log("");
console.log("************************************");
console.log("");
console.log("Entre com a opção desejada: ");

opcao=leia.questionInt();
switch(opcao){
    case 1:
        console.log("Adicionar Livro na Pilha:");
        let nome:string=leia.question("Digite o nome do livro: ");
        pilha.push(nome); //Utilizado para adicionar um elemento no topo da pilha.
        console.log("-----------------------------------");
        break;

    case 2:
        console.log("\nListar todos os Livros:\n");
        pilha.printStack(); //Exibe na tela todos os elementos da pilha.
        console.log("-----------------------------------");


        break;
    case 3:
        console.log("Retirar Livro da pilha!");
        pilha.pop(); // Esse método é usado para remover um elemento no topo da pilha.
        console.log("-----------------------------------");
        pilha.printStack(); //Exibe na tela todos os elementos da pilha.
        console.log("-----------------------------------");

        break;
    case 4:
        console.log("Sair");
        continuar=false;
        break;
    default:
        console.log("Opção Invalida!");
    break;
}
 }  while(continuar)
