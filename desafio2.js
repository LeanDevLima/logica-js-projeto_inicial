// Pergunte ao usuário qual é o dia da semana e mostre uma mensagem dependendo da resposta:
let diaSemana = prompt("Qual é o dia da semana?");

if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}


// Verifique se um número digitado pelo usuário é positivo ou negativo e mostre um alerta:
let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é positivo!");
} else if (numero < 0) {
    alert("O número é negativo!");
} else {
    alert("O número é zero!");
}

// Crie um sistema de pontuação para um jogo:
let pontuacao = prompt("Digite sua pontuação:");

if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta usando uma template string:
let saldo = 500; 
let mensagemSaldo = `Seu saldo é $${saldo.toFixed(2)}.`;
alert(mensagemSaldo);


// Peça ao usuário para inserir seu nome usando prompt e mostre um alerta de boas-vindas usando esse nome:
let nomeUsuario = prompt("Digite seu nome:");
alert(`Bem-vindo, ${nomeUsuario}!`);
