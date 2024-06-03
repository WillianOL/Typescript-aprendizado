// unknown indica que não sabemos o tipo de dado que pode ser passado em nossa função
// a do any é que ele não assume nada sobre o tipo, se ele pode ser string, number, boolean e etc.
// Então para usar um método ou propriedade no dado precisamos usar uma typeguard.
function segurancaDoTipo(dado: unknown) {
  if(typeof dado === "string") {
    console.log(dado.toUpperCase());
  }
  if(typeof dado === "number") {
    console.log(Math.floor(dado));
  }
}
segurancaDoTipo('Hello word')
segurancaDoTipo(21.234)

// Então usar o unknown ao invés do any