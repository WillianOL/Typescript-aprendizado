// type guard(segurança) vem sendo usado até agora, ele serve para garantir a segurança(type safety) do dado dentro do bloco condicional. Também chamado de type narrowing(estreitamento).
// Assim vai garantir que o tipo do dado vai mostrar seus métodos e propriedades.

function protecaoDeTipo(valor: any) {
  if (typeof valor === 'string') {
    return valor.toUpperCase();
  }
  if (typeof valor === 'number') {
    return valor.toString();
  }
  if (valor instanceof HTMLElement) {
    return valor.innerHTML;
  }
}
console.log(protecaoDeTipo('Willian'));
console.log(protecaoDeTipo(19));
console.log(protecaoDeTipo(document.body));

/*
  in - outra forma de fazer o type guard. Ele verifica se a propriedade existe no objeto ou não. Retornando
  um valor booleano
*/
const objeto = {
  nome: 'Willian',
};
if ('nome' in objeto) {
  console.log('Sim, possui');
}

// pode ser útil no caso de fetchs a api´s
interface Produto {
  nome: string;
  preco: string;
}

async function handleFetch() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const json = await response.json()
  handleProduto(json)
}

// Dessa forma garantimos a segurança do dado(type safety) e evitamos possiveis bugs
function handleProduto(data: Produto) {
  if('nome' in data) {
    document.body.innerHTML = `
      <div>
        <p>Nome: ${data.nome}</p>
        <p>Preço: ${data.preco}</p>
      </div>
    `
  }
}
handleFetch()