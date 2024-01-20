# Jogo do Número Secreto

Este é um simples jogo de adivinhação de números em JavaScript. O código faz parte do curso de lógica de programação do programa Oracle Next Education.

## Conceitos de Programação

### Variáveis

- **`numeroMaximo` e `numeroSecreto`:** Essas variáveis são utilizadas para definir o intervalo de números possíveis e o número secreto a ser adivinhado pelo jogador.
  
- **`chute`:** Armazena a entrada do usuário, representando o número que o jogador escolheu.

- **`tentativas`:** Registra o número de tentativas que o jogador fez para adivinhar o número secreto.

### Estruturas de Controle

- **`while`:** Utilizado para criar um loop que continua até que o jogador adivinhe corretamente o número secreto. A estrutura do loop é controlada pela condição `chute != numeroSecreto`.

- **`if-else`:** Realiza a verificação de se o chute do jogador é igual, menor ou maior que o número secreto e fornece feedback ao jogador com base nessa comparação.

### Entrada/Saída de Dados

- **`alert`:** Utilizado para exibir mensagens na interface do usuário, fornecendo feedback sobre o andamento do jogo.

- **`prompt`:** Solicita a entrada do usuário para que ele escolha um número.

### Operadores

- **`Math.random()` e `parseInt()`:** Utilizados para gerar um número aleatório no intervalo desejado.

### Strings e Template Literals

- **Template literals:** Utilizados para construir mensagens dinâmicas, incluindo variáveis e texto.

### Loops e Contadores

- O loop `while` é usado para permitir que o jogador faça várias tentativas até acertar o número secreto. O contador `tentativas` é incrementado a cada iteração do loop.

### Estruturas Condicionais

- O `if-else` é usado para comparar o chute do jogador com o número secreto e fornecer feedback com base nessa comparação.

## Desafios

Além do código principal, esta trilha de conhecimento inclui diversos desafios. Fique à vontade para explorar os arquivos deste repositório e se envolver com esses desafios adicionais.

