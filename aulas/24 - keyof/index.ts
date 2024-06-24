// Indica que o dado é uma chave de uma Interface/Tipo. Usado em objetos
interface Pessoa {
  nome: string;
  idade: number;
  estudante: boolean;
}

let chave: keyof Pessoa;
chave = 'estudante';
chave = 'idade';

// podemos usar o typeof em retorno de funções também. Porém, só é usado em casos muito avançados
function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

// COMO ELE É USADO:
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLDivElement;
  body: HTMLBodyElement;
  ul: HTMLUListElement;
  audio: HTMLAudioElement;
}

function buscarElemento<K extends keyof Elementos>(
  seletor: K
): Elementos[K] | null {
  return document.querySelector(seletor);
}

buscarElemento('a')?.href;

// Checkinterface - usar o keyof para criar funções genéricas utilitárias
async function fetchData<T>(url: string): Promise<T> {
  const base = 'https://api.origamid.dev/json';
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

// Dessa forma, criamos uma função generica responsável por verificar a interface de um objeto.
// recebendo um generic(I), obj e a key que depende das chaves da interface passada(keyof I)
// depois usando o is em obj para virar uma função booleana
function checkInterface<I>(obj: unknown, key: keyof I): obj is I {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function handleData() {
  const jogo = await fetchData<Jogo>('/jogo.json');
  const livro = await fetchData<Livro>('/livro.json');
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')) {
    console.log(jogo.desenvolvedora.toUpperCase());
  }
  if (checkInterface<Livro>(livro, 'autor')) {
    console.log(livro.autor.toLowerCase());
  }
}
handleData();
