"use strict";
// Generic
// é uma forma de declararmos um parâmetro para a nossa função, classe ou interface
// com ele, o typescript sabe qual o tipo do parâmetro e qual vai ser seu retorno.
// mostrando os métodos e propriedades do tipo que vai retornar
function retorna(n) {
    return n;
}
// Dessa forma ele sabe exatamente qual o tipo de dado e vai preencher na função
console.log(retorna('Oi'));
console.log(retorna(false));
// podemos fazer a anotaçao dessa forma(vão ter casos que vai ser necessário)
console.log(retorna(300));
/*
  EXEMPLO 01
*/
const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão'];
// Novamente, o primeiro generic é o tipo da marcação(number, object, array)
// normalmente se vê isso sendo abreviado ao máximo
function primeirosCincos(lista) {
    return lista.slice(0, 5);
}
console.log(primeirosCincos(numeros));
console.log(primeirosCincos(frutas));
/*
  EXEMPLO 02
*/
function naoENulo(dado) {
    if (dado !== null)
        return dado;
    else
        return null;
}
console.log(naoENulo('Oi')?.toLocaleLowerCase());
console.log(naoENulo(100.21)?.toFixed());
/*
  EXEMPLO 03
*/
// Podemos ser mais especificos na hora do retorno nesse exemplo.(se quisermos)
function tipoDeDado(d) {
    const informacoes = {
        dado: d,
        tipo: typeof d,
    };
    return informacoes;
}
console.log(tipoDeDado(true).tipo);
/*
  extends
*/
// Dessa forma, o generic(tipo) vai aceitar qualquer elemento que for HTMLElement.
// E assim podemos definir que a função vai aceitar um dado dês de quê ele seja um tipo especifico
function mostrarDado(elemento) {
    return {
        texto: elemento.innerText,
        elemento,
    };
}
const button = document.querySelector('button');
if (button)
    console.log(mostrarDado(button));
/*
  Exemplo de como seria a seleção de elementos do jquery com typescript
*/
function $(seletor) {
    return document.querySelector(seletor);
}
const button2 = $('button');
console.log(button2);
/*
  Métodos - são criados usando generics. Então podemos dizer qual será o tipo esperado
  (cuidado ao definir o tipo do generic)
*/
const link = document.querySelector('.link');
console.log(link?.href);
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
}
handleData();
