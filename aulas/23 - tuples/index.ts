// tuples - presente em todas as linguagens. No typescript, são arrays que possuem dados em posições fixas
const array1 = ['Nome', 200]
// assim podemos inferir o tipo de cada posição da array. No caso
// o primeiro vai ser uma string e o segundo um number sempre.
const array2: [string, number] = ['Nome', 200]

// uso comum é no React, onde desestruturamos arrays.
const [nome, preco] = array2

// as const - torna um dado readonly e infere o tipo que seja mais especifico
function pegarTexto(seletor: string) {
  const elemento = document.querySelector<HTMLElement>(seletor)
  if(elemento) {
    return [elemento, elemento.innerText] as const
  } else {
    return null
  }
}

const botao = pegarTexto('button')

if(botao) {
  // botao[0] = "" - Erro pois o as const torna os dados apenas para leitura, não pode modificar
  const [botaoElemento, botaoTexto] = botao
}