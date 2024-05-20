"use strict";
// Toda função possue uma estrutura quase que padrão.(visto até agora)
// podemos definir parâmetros opcionais com o "?"
function adicionar(a, b, c) {
    return a + b + (c ? c : 0);
}
adicionar(5, 1, 10);
const tirar = (a, b) => a - b;
tirar(10, 5);
/*
  void - no javascript funções sem retorno retornam undefined, o typescript define isso como void.
  Isso evita usos errados como em verificações booleanas de métodos que não possuem retorno.
*/
function pintarFundo(cor) {
    document.body.style.backgroundColor = cor;
}
pintarFundo('orange');
// isso seria uma verificação errada, pois uma função que não retorna nada é undefined.
// if (pintarFundo('orange')) {
//   console.log('pintou');
// }
const button = document.querySelector('button');
button?.click();
// exemplo que não retorna void
function isNumber(valor) {
    if (typeof valor === 'number') {
        return true;
    }
}
console.log(isNumber(10));
console.log(isNumber('10'));
/*
  never - para casos especificos onde ocorre retorna um erro e o código é abortado
*/
function abortar(mensagem) {
    throw new Error(mensagem);
}
function totalLados(quadrado) {
    console.log(quadrado.lado);
}
function formatar(texto) {
    if (typeof texto === "string") {
        return texto.trim().toLowerCase();
    }
    else {
        return texto.map(valor => valor.trim().toLowerCase());
    }
}
console.log(formatar('   PROdução  ').toUpperCase());
console.log(formatar(['FAZER   ', " OiI  "]).filter(itens => typeof itens));
