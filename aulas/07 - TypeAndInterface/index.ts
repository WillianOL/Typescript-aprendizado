// TYPE
// criação de tipos costumizados utilizando a palavra chave type
type NumberOrString = string | number;

let total: NumberOrString = 10;
total = 'Hello';

// Criar um tipo costumizado para objetos organiza bastante o código.
type DadosPessoa = {
  nome: string;
  idade: number;
  solteiro: boolean;
};

function preencherInfo(dados: DadosPessoa) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.idade}</p>
    <p>É solteiro? ${dados.solteiro ? 'Sim' : 'Não'}</p>
  </div>
  `;
}

// Atribuindo ao tipo criado do objeto, ele pede as propriedades definidas no tipo.
const joao: DadosPessoa = {
  nome: 'João',
  idade: 25,
  solteiro: false,
};

const juliana: DadosPessoa = {
  nome: 'Juliana',
  idade: 23,
  solteiro: false,
};

preencherInfo(joao);
preencherInfo(juliana);

// Não serve somente para objetos, podemos fazer diversas coisas com isso
// por exemplo definir que tipo de string o parâmetro aceita
type Categorias = 'Junior' | 'Senior' | 'Pleno';

function escolherCaregorias(categoria: Categorias) {
  console.log(categoria);
}

escolherCaregorias('Junior');

// INTERFACE
// É básicamente a mesma coisa do type, com algumas diferenças. Uma delas é a sintexe
interface InterfaceProduto {
  nome: string;
  preco: number;
  possuiEstoque: boolean;
}

type Produto = {
  nome: string;
  preco: number;
  possuiEstoque: boolean;
}
// Uma das diferenças no VSCode é que o type mostra o corpo do tipo quando passamos o mouse por cima
// Para fazer isso com o interface, devemos segurar o CTRL.
function mostrarProduto(dados: InterfaceProduto) {
  console.log(dados.nome, dados.preco, dados.possuiEstoque);
}

mostrarProduto({
  nome: 'Teclado',
  preco: 450,
  possuiEstoque: true,
});
// Por enquanto usar interface para objetos, e type para os tipos mais simples.