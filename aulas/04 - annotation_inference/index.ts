// definição de tipos de dados com typescript
const produto: string = 'Maçã';
const numero: number = 200;

// definição de tipos de cada propriedade dos objetos
const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Ford',
  portas: 4,
};
console.log(carro.marca);

// Inference - TS consegue entender os tipos de dados atribuidos a variáveis. Assim não precisamos
// definir o tipo de dados delas todas as vezes
const pessoa = {
  nome: 'José',
  idade: 28,
};
// Mesmo assim ele identifica o erro por causo do tipo do dado
pessoa.nome = 10;
// nesse caso ele vê quais são as possibilidades do valor
const adulto: boolean | string = pessoa.idade >= 20 ? true : 'Pessoa nova';

// O que devemos anotar o tipo obrigatóriamente são em funções, pois o javascript não executa o código para
// saber se os argumetos fazem sentido ou não. Por isso definimos os tipos
function soma(a: number, b: number) {
  return a + b;
}
soma(10, 5);

const playstation = {
  nome: 'PS5',
  preco: '3500',
};

function formatarPreco(dado: { nome: string; preco: string }) {
  dado.preco = `R$ ${dado.preco}`
  return dado
}

console.log(formatarPreco(playstation))