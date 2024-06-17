"use strict";
// Na mesma lógica do extends, podemos fazer para tipos
function ProdutoMoto(dados) {
    console.log(dados.preco);
}
ProdutoMoto({
    preco: 25000,
    retrovisores: 2,
    rodas: 2,
});
function dadoCarro(dado) {
    console.log(dado.preco);
}
