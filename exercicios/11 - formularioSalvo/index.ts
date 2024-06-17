// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  userData: any;
}

window.userData = {};

function isUserData(value: unknown): value is UserData {
  if (
    value &&
    typeof value === 'object' &&
    ('nome' in value || 'email' in value || 'cpf' in value)
  ) {
    return true;
  } else {
    return false;
  }
}

function handleKeyup({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.userData[target.id] = target.value;
    localStorage.setItem('dadosForm', JSON.stringify(window.userData));
  }
}
const formulario = document.querySelector<HTMLElement>('#form');
formulario?.addEventListener('keyup', handleKeyup);

function valedJSON(value: string) {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}

function colocarValores() {
  const dadosSalvos = localStorage.getItem('dadosForm');
  if (dadosSalvos && valedJSON(dadosSalvos)) {
    const objetoSalvo = JSON.parse(dadosSalvos);
    if (isUserData(objetoSalvo)) {
      Object.entries(objetoSalvo).forEach(([key, value]) => {
        const elemento = document.getElementById(key);
        if (elemento instanceof HTMLInputElement) {
          elemento.value = value;
          window.userData[key] = value
        }
      });
    }
  }
}
colocarValores()
