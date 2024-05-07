// Para definirmos as propriedades do construtor das classes devemos
// definir o tipo dessas propriedades fora do constructor.
class Pessoa {
  nome: string;
  idade: number;
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
  // como já é direto na classe, o TS identifica que o métodos faz parte da classe
  dizerIdade() {
    return `${this.nome} tem ${this.idade} anos`;
  }
}

const alex = new Pessoa('Alex', 29);
// A palavra chave instanceof verifica de o objeto foi construido ou herda de uma função construtora
console.log(alex instanceof Pessoa); // retorna true ou false

class Manga {
  titulo: string;
  constructor(titulo: string) {
    this.titulo = titulo;
  }
}

class Produto {
  quantidade: number;
  constructor(quantidade: number) {
    this.quantidade = quantidade;
  }
}

// Heranças
class Autor extends Manga {
  autor: string;
  constructor(titulo: string, autor: string) {
    super(titulo)
    this.autor = autor
  }
}

function buscarProduto(busca: string) {
  if (busca === 'Ichiro Oda') {
    return new Autor("One Piece", "Oda");
  }
  if (busca === 'Pc gamer') {
    return new Produto(20);
  }
  return null;
}

const produto = buscarProduto('Ichiro Oda')

// utilizar o intanceof quando o retorno de uma função tiver mais de um retorno
// e esse retorno sejam objetos. Fazer isso para que o typescript possa acessar os métodos e propriedades
// da classe

if(produto instanceof Manga) {
  console.log(produto.titulo);
}
if(produto instanceof Produto) {
  console.log(produto.quantidade);
}

if(produto instanceof Autor) {
  console.log(produto.autor);
}

// o instanceof é de javascript, então isso não se aplica as interfaces do typescript
interface Pessoa1 {
  nome: string;
}
const jessica: Pessoa1 = {
  nome: 'Jessica'
}