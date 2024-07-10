import { Pessoa } from "./global.js";

function pluginSlide(event: MouseEvent) {
  console.log(event);
  const joao: Pessoa = {
    nome: "João",
    idade: 29
  }
}

export default pluginSlide