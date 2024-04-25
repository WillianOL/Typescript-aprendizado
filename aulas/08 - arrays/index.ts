// Anotação de tipos em arrays
const numeros: number[] = [10, 5, 1, 7]
const cores: string[] = ['Preto', 'Branco', 'Laranja']

// Desse modo o typescript sabe quais métodos e propriedades mostrar com o "." pois é uma array
function maiorQue5(value: number[]) {
  return value.filter(numero => numero >= 5)
}
console.log(maiorQue5(numeros));

// Ou podemos ter mais de um tipo de dado em arrays(pode acontecer)
const dados = [20, 5, 'Big', 3, 'Olá', 'A'];

function filtrarStrings(value: (string | number)[]) {
  return value.filter(valor => typeof valor === 'string')
}
console.log(filtrarStrings(dados));

const array = [
  [20, 1, 5],
  ["oi", 'sim', 'não']
]

// outra forma de fazermos é utilizando uma interface, no caso a de Array e definindo o tipo
function mostrarNumeros(numeros: Array<number>) {
  numeros.forEach(n => console.log(n))
}
mostrarNumeros(numeros)

function mostrarDados(dados: Array<number | string>) {
  dados.forEach(dado => console.log(dado))
}
mostrarDados(dados)