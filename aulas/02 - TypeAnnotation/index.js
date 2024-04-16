const produtos = [
  {
    nome: 'O Senhor dos Anéis',
    tipo: 'livro',
  },
  {
    nome: 'A Guerra dos Tronos',
    tipo: 'livro',
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo',
  },
];
// Mais um problema que o typescript vai solucionar é o auto-completar. 
function filtrarLivros(dados) {
  return dados.filter(dado => dado.tipo === "livro")
}
console.log(filtrarLivros(produtos));