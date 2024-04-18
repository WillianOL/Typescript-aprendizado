const input = document.querySelector('input');

const total = localStorage.getItem('total');
input.value = total;
calcularGanhos(input.value)

function calcularGanhos(value) {
  const p = document.querySelector('p');
  const totalCalculo = value + 100 - value * 0.2;
  p.innerText = `ganho total ${totalCalculo}`;
}

function totalMudou() {
  const value = +input.value;
  localStorage.setItem('total', value);
  calcularGanhos(value);
}

input.addEventListener('keyup', totalMudou);
