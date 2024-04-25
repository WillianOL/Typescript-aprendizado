"use strict";
let total = 10;
total = 'Hello';
function preencherInfo(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.idade}</p>
    <p>É solteiro? ${dados.solteiro ? 'Sim' : 'Não'}</p>
  </div>
  `;
}
// Atribuindo ao tipo criado do objeto, ele pede as propriedades definidas no tipo.
const joao = {
    nome: 'João',
    idade: 25,
    solteiro: false,
};
const juliana = {
    nome: 'Juliana',
    idade: 23,
    solteiro: false,
};
preencherInfo(joao);
preencherInfo(juliana);
function escolherCaregorias(categoria) {
    console.log(categoria);
}
escolherCaregorias('Junior');
// Uma das diferenças no VSCode é que o type mostra o corpo do tipo quando passamos o mouse por cima
// Para fazer isso com o interface, devemos segurar o CTRL.
function mostrarProduto(dados) {
    console.log(dados.nome, dados.preco, dados.possuiEstoque);
}
mostrarProduto({
    nome: 'Teclado',
    preco: 450,
    possuiEstoque: true,
});
// Por enquanto usar interface para objetos, e type para os tipos mais simples.
