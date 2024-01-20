// Contador de 1 a 10 usando um loop while:
let contador1 = 1;

while (contador1 <= 10) {
    console.log(contador1);
    contador1++;
}


//Contador de 10 a 0 usando um loop while:
let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

//Contagem regressiva a partir de um número fornecido:
let numeroRegressivo = parseInt(prompt("Digite um número para a contagem regressiva:"));

while (numeroRegressivo >= 0) {
    console.log(numeroRegressivo);
    numeroRegressivo--;
}

//Contagem progressiva até um número fornecido:
let numeroProgressivo = parseInt(prompt("Digite um número para a contagem progressiva:"));
let contadorProgressivo = 0;

while (contadorProgressivo <= numeroProgressivo) {
    console.log(contadorProgressivo);
    contadorProgressivo++;
}



