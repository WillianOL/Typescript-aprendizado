// as - podemos indicar qual será um tipo de um dado, ou seja, afirmar exatamente o tipo do dado.
// assim, o typescript vai confiar e exibir os métodos e propriedades do dado.
// tem que ser algo que herde do dado selecionado
const button = document.querySelector('button') as HTMLButtonElement;

// cuidado ao usar, pois ele vai executar mesmo se o elemento ou dado não existir. Ocasionando em erros.
// um uso comum são em chamdas a API
interface Produto {
  nome: string;
  preco: number;
}

// dessa forma, como são retornar any, mas sim uma promise. Então devemos dizer que a promise retorna a interface
// assim não precisamos dizer o tipo do retorno toda vez que executarmos a função
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

// podemos usar pois o retorno da função é any(qualquer)
async function produtoAleatorio() {
  const produto = (await fetchProduto()) as Produto;
  console.log(produto.nome);
}
produtoAleatorio();

/*
  ! - non-null operator
  Indica que não existe a possibilidade de o dado ser null
*/
// só usar quando tivermos certaza que o dado existe
const button2 = document.querySelector(`button`)!;
button.click();

// const link = document.querySelector('a')?.href = 'https://youtube.com'
const link = (document.querySelector('a')!.href = 'https://youtube.com');

// Outra sintexes
const video = document.querySelector('#video') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('#video');

// Dessa forma aqui é ainda mais segura, pois ainda pode retornar null.
// assim exigindo que sempre seja verificado se existe caso seja usado.
const video3 = document.querySelector<HTMLVideoElement>('#video');

// forma não recomendada
const video4 = document.querySelector('#video');
(video4 as HTMLVideoElement).volume;