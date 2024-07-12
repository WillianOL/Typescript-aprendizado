// para usar bibliotecas que foram criadas em javascript, precisamos baixar também seus tipos 
const body = $('body')
body.addClass('conteiner')

// assim o typescript sabe o que cada método ou propriedade retorna.
console.log(_.intersection([1 , 2, 3, 4, 5], [1, 2, 4, 6, 8]));
