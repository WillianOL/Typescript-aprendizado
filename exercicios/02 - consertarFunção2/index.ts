const input = document.querySelector('input');

const total = localStorage.getItem('total');
if (input && total) {
  input.value = total;
  calcularGanhos(Number(input.value));
}

function calcularGanhos(value: number) {
  const p = document.querySelector('p');
  const totalCalculo = value + 100 - value * 0.2;
  if (p) p.innerText = `ganho total ${totalCalculo}`;
}

function totalMudou() {
  if (input) {
    localStorage.setItem('total', input.value);
    calcularGanhos(Number(input.value));
  }
}

if (input) input.addEventListener('keyup', totalMudou);
