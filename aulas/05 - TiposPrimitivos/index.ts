// tipos básicos - string, number e boolean
const nome: string = 'João';
const idade: number = 24;
const condicao: boolean = idade < 20;
// verifica os tipos
console.log(typeof condicao);
console.log(typeof document); // object
console.log(typeof {}); // object
console.log(typeof []); // object

// Type guard - proteção do tipo. Funciona como uma garantia que o código não vai quebrar
if (typeof nome === 'string') {
  console.log(nome.toUpperCase());
} else {
  console.log('Não é uma string');
}

// Não confundir string, number e boolean com String, Number e Boolean
const frase = new String('Front End'); // retorna um Objeto
const frase2 = String('Front End'); // é uma função e retorna uma string
const frase3 = 'Front End';
