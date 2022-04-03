// uerySelector e querySelectorAll
// https://youtu.be/rqj4SlhfCR0
// Outras formas de acessar o DOM usando seletores baseados em CSS e selecionar somente o que se deseja

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

// querySelectorAll
var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista .item');
console.log(itensQuery2);

// querySelector
var lista = document.querySelector('#lista');
console.log(lista);

var primeiraLista = document.querySelector('ul');
console.group(primeiraLista);

var span = document.querySelector('#paragrafo span');
console.log(span);










