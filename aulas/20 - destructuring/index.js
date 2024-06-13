"use strict";
// para definir os tipos dos dados na desestruturação, devemos abrir um objeto
// e definiro o tipo de cada dado desestruturado.
const { body } = document;
// Se a desestruturação começar a ficar muito grande, melhor trocar para uma interface
function dadoAleatorio({ nome, idade }) {
    nome.includes('Joao');
    idade.toFixed();
}
dadoAleatorio({
    nome: 'Joao',
    idade: 39,
});
function cliqueDoMouse({ currentTarget, pageX, pageY, }) {
    console.log(`Mouse clicou em x: ${pageX}, y: ${pageY}`);
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerText = `Mouse clicou em x: ${pageX}, y: ${pageY}`;
    }
}
function cliqueDoMouse2({ currentTarget, pageX, pageY }) {
    console.log(`Mouse clicou em x: ${pageX}, y: ${pageY}`);
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerText = `Mouse clicou em x: ${pageX}, y: ${pageY}`;
    }
}
document.documentElement.addEventListener('click', cliqueDoMouse);
// ...REST
// para anotar é da mesma forma usada até agr, o que muda é que o rest sempre vai ser uma array.
function comparando(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
console.log(comparando('maior', 3, 5, 5, 2, 10, 20, 1, 23, 9, 100));
