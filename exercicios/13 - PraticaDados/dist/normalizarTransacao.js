import moedaParaNumber from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";
export default function normalizarTransacao(transacao) {
    return {
        data: stringToDate(transacao.Data),
        nome: transacao.Nome,
        email: transacao.Email,
        id: transacao.ID,
        status: transacao.Status,
        moeda: moedaParaNumber(transacao["Valor (R$)"]),
        valor: 0,
        pagamento: transacao["Forma de Pagamento"],
        clienteNovo: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map