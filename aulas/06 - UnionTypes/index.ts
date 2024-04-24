// Union types - servem para afirmamos que uma variável, argumento, parâmetro e etc pode receber um ou mais tipos
let valorTotal: string | number = 200;
valorTotal = '200';

// tentar retornar apenas um valor unico em funções
function isBooleanOrNumber(value: boolean | number): boolean {
  if (typeof value === 'boolean') {
    console.log('É booleano');
    return true;
  } else if (typeof value === 'number') {
    console.log('É número');
    return true;
  } else {
    console.log(`Não é booleano ou número, o valor é do tipo ${typeof value}`);
    return false;
  }
}

isBooleanOrNumber(true);

const button = document.querySelector('button');

// "?." optional chaining(encadeamento opcional) - só executa se o valor comparado for diferente de null e undefined
// feature recente do javascript
button?.click()
