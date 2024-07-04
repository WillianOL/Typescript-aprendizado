// adicionar a extenção pois não é corrigido na compilação, em algumas bibliotecas isso é corrigido
import pessoa from '../pessoa.js';

const teste = 'teste';

// Vai acusar o error exatamente na linha do typescript por causa do sourceMap
const link = document.querySelector('a')

if(link) {
  link.innerHTML = "Oi"
}

function handleProduto(dados: any) {}

pessoa();

function handleClick(this: HTMLElement) {
  console.log(this);
}

document.documentElement.addEventListener('click', handleClick)