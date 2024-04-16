//@ts-check

// quando atribuirmos um valor a uma variável, seu tipo passa a ser do valor colocado nela
// com isso ela vai ser acesso aos seus métodos e pripriedades do tipo do dado
const nome = 'José';
const n1 = 49.7;

// O javascript não acusa nenhum tipo de error nos tipos quando estamos codando
// os erros são retornandos apenas no runtime
// n1.toLowerCase();
nome.toLowerCase();

// Não nesse caso ao invés de acontecer a soma, os valores são concatenados. Porém o javascript não retorna
// nenhum tipo de error, nem mesmo no runtime
const total = n1.toFixed();
console.log(total + 10);

// tipo de dados array
const cores = ['verde', 'amarelo', 'preto'];
// cores é uma array de strings e o parâmetro do método map é uma string.
// com isso o retorno dessa operação é uma nova array de strings
const maiuscolas = cores.map((cor) => cor.toUpperCase());
console.log(maiuscolas);

// dado do tipo HTMLElement
const body = document.body
body.style.backgroundColor = "#333"

// Mais um exemplo da sintexe do typescript, o retorno no querySelector pode ser
// um HTMLElement |(ou) null
// Isso ocorre para se o botão não existir, o resultado é null
const button = document.querySelector("button");

const operacao = 20;
console.log(operacao);