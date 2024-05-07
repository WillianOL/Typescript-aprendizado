const links = document.querySelectorAll('.link');

function modificaEstilo(elemento: HTMLElement) {
  elemento.style.border = '1px solid red';
  elemento.style.color = 'blue';
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    modificaEstilo(link);
  }
});
