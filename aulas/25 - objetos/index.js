"use strict";
const pessoa01 = {
    nome: "João",
    idade: 20,
    funcao: "Médico",
};
const pessoa02 = {
    nome: "Catarina",
    idade: 34,
    funcao: "Desenvolvedora",
};
// mesmo a propriedade funcao não existindo na interface, o typescript não acusa nenhum error
// pois mesmo assim a propriedade nome e idade estão sendo passadas.
// só não podemos acessar a propriedade que não esteja declarada na interface dentro da função
function mostrarNome(dados) {
    console.log(dados.nome);
}
mostrarNome(pessoa01);
mostrarNome(pessoa02);
// utility types - funções de typescript
// Partial - transforma todas as propriedades de uma interface em opcionais.
// Não é recomendado usar o tempo todo, pois é QUASE a mesma coisa de ser um any
function mostrarNomePartial(dados) {
    console.log(dados.nome);
}
const notebook = {
    nome: 'Notebook',
    preco: 3200,
    palavrasChave: ['computador', 'notebook', 'portátil'],
    ram: 8
};
if (typeof notebook.ram === 'number') {
    notebook.ram.toFixed();
}
// assim evitamos uma serie de verificações para a execução do código.
function mostrarNome2(obj) {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
}
// assim se for passado algo que não seja um objeto o typescript vai acusar um erro.
mostrarNome2({
    titulo: 'Javascript'
});
