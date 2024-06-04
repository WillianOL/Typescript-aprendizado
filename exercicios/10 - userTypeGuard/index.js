"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function handleFetch() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    pegarCurso(json);
}
handleFetch();
function isCurso(value) {
    if (value && typeof value === 'object' && 'nome' in value && 'tags' in value && 'horas' in value) {
        return true;
    }
    else {
        return false;
    }
}
function pegarCurso(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach(item => {
            document.body.innerHTML += `
        <div>
          <h2>Nome: ${item.nome}</h2>
          <p>Horas: ${item.horas}</p>
          <p>Tags: ${item.tags.join(', ')}</p>
        </div>
      `;
        });
    }
}
