// Acessando o DOM (documento object model)
// usuário interagindo com a página
// podemos manipular eventos pelo DOM para afetar o html

// Acessando os elementos por:

// tag
var titulo = documento.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

// id
var pagrafo = document.getElementsByid('paragrafo');
console.log(pagrafo);

// class
var itensDaLista = document.getElementsByClassName('Item');
console.log(itensDaLista);








