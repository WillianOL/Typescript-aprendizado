interface Fabricante {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Montadora {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto {
  descricao: string;
  garantia: string;
  nome: string;
  preco: number;
  seguroAcidente: boolean;
  empresaMontadora: Montadora;
  empresaFabricante: Fabricante;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data: Produto = await response.json();
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h1>${data.nome}</h1>
      <p>${data.descricao}</p>
      <p>R$ ${data.preco}</p>
      <h2>Fabricante</h2>
      <p>${data.empresaFabricante.nome}</p>
      <p>${data.empresaFabricante.pais}</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  `;
}