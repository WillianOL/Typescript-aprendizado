"use strict";
// Para definirmos as propriedades do construtor das classes devemos
// definir o tipo dessas propriedades fora do constructor.
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
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
    titulo;
    constructor(titulo) {
        this.titulo = titulo;
    }
}
class Produto {
    quantidade;
    constructor(quantidade) {
        this.quantidade = quantidade;
    }
}
// Heranças
class Autor extends Manga {
    autor;
    constructor(titulo, autor) {
        super(titulo);
        this.autor = autor;
    }
}
function buscarProduto(busca) {
    if (busca === 'Ichiro Oda') {
        return new Autor("One Piece", "Oda");
    }
    if (busca === 'Pc gamer') {
        return new Produto(20);
    }
    return null;
}
const produto = buscarProduto('Ichiro Oda');
// utilizar o intanceof quando o retorno de uma função tiver mais de um retorno
// e esse retorno sejam objetos. Fazer isso para que o typescript possa acessar os métodos e propriedades
// da classe
if (produto instanceof Manga) {
    console.log(produto.titulo);
}
if (produto instanceof Produto) {
    console.log(produto.quantidade);
}
if (produto instanceof Autor) {
    console.log(produto.autor);
}
const jessica = {
    nome: 'Jessica'
};
