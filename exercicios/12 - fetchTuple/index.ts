// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function handleFetch() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json')
  const dado = await response.json()
  handleVenda(dado)
}

interface DetalhesProduto {
  marca: string;
  cor: string;
}
// para fazer o tuple, usar o type ao invés do interface
type Venda = [string, number, string, DetalhesProduto]

function handleVenda(dados: Venda[]) {
  const totalVendas = dados.reduce((total, venda) => {
    return total + venda[1]
  }, 0)
  
  document.body.innerText = `Total de vendas: ${totalVendas}`
}

handleFetch()