import leia= require('readline-sync');
import { Queue } from '../Queue';

const fila=new Queue<string>();
let continuar:boolean=true;
let opcao:number;
do{
console.log("               MENU:                ");
console.log("************************************");
console.log("");
console.log("     1 - Adicionar Cliente na Fila");
console.log("     2 - Listar todos os Clientes");
console.log("     3 - Retirar Cliente da Fila");
console.log("     0 -Sair");
console.log("");
console.log("************************************");
console.log("");
console.log("Entre com a opção desejada: ");

opcao=leia.questionInt();
switch(opcao){
    case 1:
        console.log("Adicionar Cliente na Fila!");
        let nome:string=leia.question("Digite o nome da pessoa: ");
        fila.enqueue(nome); //Utilizado para adicionar um elemento no final da fila.
        console.log("-----------------------------------");
        break;

    case 2:
        console.log("\nListar todos os Clientes:\n");
        fila.printQueue(); //Exibe na tela todos os elementos da fila.
        console.log("-----------------------------------");


        break;
    case 3:
        console.log("Retirar cliente da fila");
        fila.dequeue(); // Esse método é usado para remover o primeiro elemento da fila.
        console.log("-----------------------------------");
        fila.printQueue(); //Exibe na tela todos os elementos da fila.
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
