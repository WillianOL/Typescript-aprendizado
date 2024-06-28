// duck typing - objetos passados em funções podem ter propriedades e métodos além dos declarados na interface.
interface Pessoa {
  nome: string;
  idade: number;
}

const pessoa01 = {
  nome: "João",
  idade: 20,
  funcao: "Médico",
}

const pessoa02 = {
  nome: "Catarina",
  idade: 34,
  funcao: "Desenvolvedora",
}
// mesmo a propriedade funcao não existindo na interface, o typescript não acusa nenhum error
// pois mesmo assim a propriedade nome e idade estão sendo passadas.
// só não podemos acessar a propriedade que não esteja declarada na interface dentro da função
function mostrarNome(dados: Pessoa) {
  console.log(dados.nome);
}
mostrarNome(pessoa01)
mostrarNome(pessoa02)

// utility types - funções de typescript
// Partial - transforma todas as propriedades de uma interface em opcionais.
// Não é recomendado usar o tempo todo, pois é QUASE a mesma coisa de ser um any
function mostrarNomePartial(dados: Partial<Pessoa>) { 
  console.log(dados.nome);
}

// Uma forma de colocarmos propriedades que não existem na interface. 
// Porem seu tipo e unknown e precisamos sempre verificar o tipo da propriedade
interface Produto {
  nome: string;
  preco: number;
  palavrasChave: string[];
  [key: string]: unknown;
}

const notebook: Produto = {
  nome: 'Notebook',
  preco: 3200,
  palavrasChave: ['computador', 'notebook', 'portátil'],
  ram: 8
}
if(typeof notebook.ram === 'number') {
  notebook.ram.toFixed()
}

// Record - definir um objeto generico(para casos onde não sabemos o que pode ter no objeto)
// forma de fazermos uma interface de objetos literais(tem que ser objeto)
interface ObjetoLiteral {
  [key: string]: unknown;
}

// Mesmo objetivo da de cima usando o Reacord
type ObjetoLiteral2 = Record<string, unknown>

// podemos fazer assim, onde as propriedades vão autocompletar pelo vscode
type ObjetoLiteral3 = Record<"titulo" | "tipo", unknown>

// assim evitamos uma serie de verificações para a execução do código.
function mostrarNome2(obj: ObjetoLiteral2) {
  if('titulo' in obj) {
    console.log(obj.titulo);
  }
}
// assim se for passado algo que não seja um objeto o typescript vai acusar um erro.
mostrarNome2({
  titulo: 'Javascript'
})