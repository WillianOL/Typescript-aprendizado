// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.
interface Empresa {
  funcacao: number;
  nome: string;
  pais: string;
}

interface Produto {
  descricao: string;
  garantia: string;
  nome: string;
  preco: number;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data);
  
  showProduct(data);
}

fetchProduct();

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco} R$</p>
      <p>${data.garantia} Anos</p>
      <p>Tem seguro a acidentes: ${data.seguroAcidentes ? "Sim" : "Não"}</p>
      <p>${data.descricao}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
}
