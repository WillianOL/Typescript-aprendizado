"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(({ aulas, nivel, nome, horas, gratuito, tags, idAulas }) => {
        let cor;
        if (nivel === 'iniciante') {
            cor = '#07F';
        }
        else if (nivel === 'avancado') {
            cor = '#F55';
        }
        document.body.innerHTML += `
      <div>
        <h2 style="color: ${cor}">${nome}</h2>
        <p style="color: ${cor}">Nivel: ${nivel}</p>
        <p>Horas: ${horas}hrs</p>
        <p>Número de aulas: ${aulas}</p>
        <p>Tags: ${tags.join(", ")}</p>
        <p>Aulas: ${idAulas.join(", ")}</p>
        <p>Gratuito: ${gratuito ? 'Sim' : 'Não'}</p>
      </div>
    `;
    });
}
