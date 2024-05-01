// any é um tipo de dado do typescript, que quer dizer qualquer dado.
// deve-se evitar ao máximo o uso do any pois ele remove as seguranças dos tipos que o TS fornece
function deixarMinuscola(texto: any) {
  return texto.toLowerCase()
}

const frase01 = deixarMinuscola("c")
// Mesmo passando um tipo que não possui o método usado, não acusa nenhum erro
// const numero = deixarMinuscola(10);

// um uso lógico do any é no consumo de API's, no método json() onde não sabemos que tipo de dados a api retorna
async function fetchAPI(url: string) {
  const reponse = await fetch(url)
  const json = await reponse.json()
  manipularDados(json)
}
fetchAPI('https://api.origamid.dev/json/cursos.json')

function manipularDados(dado: {nome: string}) {
  console.log(dado.nome);
}