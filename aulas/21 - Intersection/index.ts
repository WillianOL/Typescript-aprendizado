type Produto = {
  preco: number;
};

type Moto = {
  rodas: number;
  retrovisores: number;
};
// Na mesma lógica do extends, podemos fazer para tipos
function ProdutoMoto(dados: Produto & Moto) {
  console.log(dados.preco);
}

ProdutoMoto({
  preco: 25000,
  retrovisores: 2,
  rodas: 2,
});

// Adicionar novas propriedades e métodos a tipos e interfaces
type TipoMoto = {
  rodas: number;
  preco: number;
};

type CorMoto = TipoMoto & {
  cor: string;
};

// Com interfaces, deve-se usar o mesmo nome para adicionar mais propriedades e métodos
interface TipoCarro {
  rodas: number;
  portas: number;
}

interface TipoCarro {
  preco: number;
}

function dadoCarro(dado: TipoCarro) {
  console.log(dado.preco);
}
