import normalizarTransacao from './normalizarTransacao.js';
import totalValores from './totalValores.js';
import useFetch from './useFetch.js';
async function handleData() {
    const data = await useFetch('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transacoes = data.map(normalizarTransacao);
    console.log(transacoes);
    totalValores(transacoes);
}
handleData();
//# sourceMappingURL=index.js.map