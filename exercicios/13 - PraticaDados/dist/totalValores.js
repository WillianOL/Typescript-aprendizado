function totalValores(data) {
    const conteiner = document.getElementById('totalTransacoes');
    const total = data.reduce((a, b) => {
        return a + Number(b.moeda);
    }, 0);
    if (conteiner instanceof HTMLDivElement) {
        conteiner.innerHTML = `<p>R$ ${total}</p>`;
    }
}
export default totalValores;
//# sourceMappingURL=totalValores.js.map