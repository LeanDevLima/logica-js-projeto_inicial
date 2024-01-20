// Mensagem de boas-vindas no console:
console.log("Bem-vindo!");


//Exibir "Olá, [seu nome]!" no console:
let nome = "Leanderson";
console.log("Olá, " + nome + "!");

//Exibir "Olá, [seu nome]!" em um alert:
let nomes = "Leanderson";
alert("Olá, " + nome + "!");

//Pergunta sobre a linguagem de programação usando prompt:
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log("Você gosta de programar em " + linguagem + ".");

//Soma de dois valores:
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log("A soma de " + valor1 + " e " + valor2 + " é igual a " + resultado + ".");

//Subtração de dois valores:
let valor3 = 15;
let valor4 = 7;
let resultados = valor3 - valor4;
console.log("A diferença entre " + valor3 + " e " + valor4 + " é igual a " + resultados + ".");

//Verificar se a pessoa é maior ou menor de idade:
let idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//Verificar se um número é positivo, negativo ou zero:
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


//Loop while para imprimir números de 1 a 10 no console:
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//Verificar se a nota é maior ou igual a 7:
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//Gerar número aleatório usando Math.random():
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//Gerar número inteiro entre 1 e 10:
let numeroInteiro = Math.floor(Math.random() * 10) + 1;
console.log(numeroInteiro);

//Gerar número inteiro entre 1 e 1000:
let inteiroNumero = Math.floor(Math.random() * 1000) + 1;
console.log(inteiroNumero);






