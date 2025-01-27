type Pagamento = 'Boleto' | 'Cartão de Crédito';

type Status =
  | 'Paga'
  | 'Aguardando pagamento'
  | 'Recusada pela operadora de cartão';

interface TransacoesAPI {
  Data: string;
  Nome: string;
  Email: string;
  ID: number
  Status: Status;
  'Forma de Pagamento': Pagamento;
  'Valor (R$)': string;
  'Cliente Novo': number;
}

interface Transacoes {
  data: Date;
  nome: string;
  email: string;
  id: number;
  status: Status;
  moeda: string;
  valor: number | null;
  pagamento: Pagamento;
  clienteNovo: boolean
}