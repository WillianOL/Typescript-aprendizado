"use strict";
// null - é um tipo primitivo que representa a ausencia de valor.
// comum em funções que buscam algo no DOM
const botao = document.querySelector('button');
const nome = localStorage.getItem('nome');
console.log(botao, nome); // null
if (botao !== null) {
    botao.click();
}
// não precisa comparar com o null pq null é false
if (botao) {
    botao.click();
}
// ou fazer dessa forma.
botao?.click();
// é um bug ser um objeto, mas ainda não foi corrigido para não quebrar código antigo
console.log(typeof null);
// undefined - significa a ausencia de valor, em uma variável já instanciada ou propriedade que não existe ou
// mesmo em uma função que não retorna nada
let numero;
const pessoa = {};
function abracar() { }
console.log(pessoa.nome);
console.log(numero);
console.log(abracar());
const livro = {
    nome: 'Harry Pother',
};
const celular = {};
console.log(livro.nome); // Harry Pother
// Automaticamente o VSCode coloca o operacional "opcional chaining" pois isso pode ou não ser undefined
console.log(celular.nome?.concat()); // undefined
