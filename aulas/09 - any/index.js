"use strict";
// any é um tipo de dado do typescript, que quer dizer qualquer dado.
// deve-se evitar ao máximo o uso do any pois ele remove as seguranças dos tipos que o TS fornece
function deixarMinuscola(texto) {
    return texto.toLowerCase();
}
const frase01 = deixarMinuscola("OlA BRaSiL");
// Mesmo passando um tipo que não possue o método usado, não acusa nenhum erro
// const numero = deixarMinuscola(10);
// um uso lógico do any é no consumo de API's, no método json() onde não sabemos que tipo de dados a api retorna
async function fetchAPI(url) {
    const reponse = await fetch(url);
    const json = await reponse.json();
    manipularDados(json);
    console.log(json);
}
fetchAPI('https://api.origamid.dev/json/cursos.json');
function manipularDados(dado) {
    console.log(dado.nome);
}
