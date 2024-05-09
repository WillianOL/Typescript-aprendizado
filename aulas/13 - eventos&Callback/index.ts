const button = document.querySelector('button');

// usar o pointerdown para o ts não acusar erro ao anotar o tipo do evento como PointerEvent
function handleClick(event: PointerEvent) {
  console.log(event.pageX);
}

function handleScroll(event: Event) {
  console.log(event);
}

// o pointerdown ativa a partir do click. Sem esperar.
button?.addEventListener('pointerdown', handleClick);
window.addEventListener('scroll', handleScroll);

// quando uma função for receber diferentes tipos de eventos, devemos usar o instanceof para manipular
function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);

/*
  this - lidar com ele em eventos de callback
*/
// forma de como lidar com o this. Anotando seu tipo como primeiro "argumento" da função
function handleClick2(this: HTMLButtonElement, event: MouseEvent) {
  console.log(this);
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    console.log(elemento.innerHTML);
  }
}

button?.addEventListener('click', handleClick2);
