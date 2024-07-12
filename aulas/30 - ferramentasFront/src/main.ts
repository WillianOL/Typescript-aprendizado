import _ from 'lodash';
import Clipboard from 'clipboard'

const button = new Clipboard('button')

function handleCopy(event: Clipboard.Event) {
  event.clearSelection()
}

button.on('success', handleCopy)

interface Produto {
  nome: string;
  id: number;
}

const livro: Produto = {
  id: 50,
  nome: 'A sutil arte de ligar o foda-se',
};

console.log(livro.nome);

console.log(_.difference([1, 5, 6, 3], [1, 4, 6, 3]));
