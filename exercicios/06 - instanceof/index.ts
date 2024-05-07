const link = document.getElementById('origamid');

// fazer isso pois apenas o HTMLAnchorElement(que usa o extends no HTMLElement) possue
// a propriedade href. Sem a verificação, ele tenta puxar o método do HTMLElement.
if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
}
// utilizar o dir para mostrar sempre o objeto ao invés do elemento HTML no console
console.dir(link);
