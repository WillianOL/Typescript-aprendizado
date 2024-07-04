import pessoa from '../pessoa.js';
const teste = 'teste';
const link = document.querySelector('a');
if (link) {
    link.innerHTML = "Oi";
}
function handleProduto(dados) { }
pessoa();
function handleClick() {
    console.log(this);
}
document.documentElement.addEventListener('click', handleClick);
//# sourceMappingURL=index.js.map