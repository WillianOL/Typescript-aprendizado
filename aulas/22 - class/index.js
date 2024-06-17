"use strict";
console.log(document.constructor);
// temos que definir o tipo de cada propriedade na classe, e também o tipo dos parâmetros do construtor
class Pessoa {
    // public - é o padrão e pode ser acessada em qualquer lugar.
    // readonly - serve para bloquear modificações externas, apenas para ler ou puxar o valor.
    nome;
    // private - não deixar a propriedade ser acessada fora da classe
    idade;
    // protected - acessável apenas dentro das classes, também nas extendidas
    cpf;
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    // Comum ter métodos que puxem o valor de propriedades
    getIdade() {
        return this.idade;
    }
}
// quando extendemos a classe, as propriedades privadas não aparecem.
class Profissao extends Pessoa {
    getCpf() {
        return this.cpf;
    }
}
const joao = new Pessoa('João', 29, 12345678900);
console.log(joao);
// Assim, podemos usar o instanseof para verificar se algo é uma instancia da classe criada.
if (joao instanceof Pessoa) {
    console.log(joao.nome);
}
// exemplos
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const quadrado01 = new Quadrado(20);
if (quadrado01 instanceof Quadrado) {
    console.log(quadrado01.getPerimetro());
}
const formas = [20, 5, 30, 15, 7, 4, 120, 0, 3].map((numero) => {
    if (numero < 15) {
        return new Quadrado(numero);
    }
    else {
        return new Circulo(numero);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.raio);
    }
});
