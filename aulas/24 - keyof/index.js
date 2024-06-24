"use strict";
let chave;
chave = 'estudante';
chave = 'idade';
// podemos usar o typeof em retorno de funções também. Porém, só é usado em casos muito avançados
function coordenadas(x, y) {
    return { x, y };
}
let coord;
coord = (x, y) => {
    return {
        x,
        y,
    };
};
function buscarElemento(seletor) {
    return document.querySelector(seletor);
}
buscarElemento('a')?.href;
// Checkinterface - usar o keyof para criar funções genéricas utilitárias
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
// Dessa forma, criamos uma função generica responsável por verificar a interface de um objeto.
// recebendo um generic(I), obj e a key que depende das chaves da interface passada(keyof I)
// depois usando o is em obj para virar uma função booleana
function checkInterface(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    const livro = await fetchData('/livro.json');
    if (checkInterface(jogo, 'desenvolvedora')) {
        console.log(jogo.desenvolvedora.toUpperCase());
    }
    if (checkInterface(livro, 'autor')) {
        console.log(livro.autor.toLowerCase());
    }
}
handleData();
