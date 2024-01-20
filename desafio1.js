// Mostra um alerta de boas-vindas
alert("Boas vindas ao nosso site!");

// Declaração de variáveis
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Exibe um alerta de erro
alert("Erro! Preencha todos os campos");

// Declaração da variável mensagemDeErro
let mensagemDeErro = "Erro! Preencha todos os campos";

// Exibe um alerta com o valor da variável mensagemDeErro
alert(mensagemDeErro);

// Pede ao usuário para inserir o nome usando o prompt
nome = prompt("Digite seu nome:");

// Pede ao usuário para inserir a idade usando o prompt
idade = prompt("Digite sua idade:");

// Converte a idade de string para número
idade = Number(idade);

// Verifica se a idade é maior ou igual a 18 e exibe um alerta correspondente
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}
