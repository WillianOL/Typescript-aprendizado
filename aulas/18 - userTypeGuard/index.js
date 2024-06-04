"use strict";
// Verificar se algo é uma array
async function fecth() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
// formas comuns de verificar se o tipo é uma array
function handleCursos(data) {
    if (data instanceof Array) {
        console.log('É uma instância de array');
    }
    if (Array.isArray(data)) {
        console.log('É um array');
    }
}
/*
  type predicate - is
*/
// Esse tipo de função é chamada de useTypeGuard
function isNumber(value) {
    return typeof value === 'number';
}
function handleNumer(value) {
    if (isNumber(value)) {
        console.log(value.toFixed());
    }
}
handleNumer(10.5);
async function fecthProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}
fecthProduto();
// forma de garantir que a propriedade da interface existe dentro do valor passado.
// mesmo assim, não está 100% seguro a varificação. Pois ele não varifica o tipo da propriedade
function isProduto(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduto(data) {
    if (isProduto(data)) {
        if (typeof data.preco === 'number') {
            console.log(data.preco);
        }
    }
}
