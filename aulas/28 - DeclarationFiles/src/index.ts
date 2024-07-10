// forma de declarar interfaces e types globais sem criar o arquivo.d.ts
declare global {
  interface Produto {
    marca: string,
    preco: number,
  }
}

export const joao: Pessoa = {
  id: 20,
  nome: "João",
  idade: 25
}

const notebook: Produto = {
  marca: "Lenovo",
  preco: 3500
}