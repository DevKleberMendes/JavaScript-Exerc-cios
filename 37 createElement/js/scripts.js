// Criando elementos com DOM (createElement)

// inserindo elementos no body do html
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o contéudo do paragrafo");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);


var body = document.querySelector("body");
console.log(body);

body.appendChild(novoParagrafo);



// inserindo em um container
var container = document.getElementById("container");
console.log(container);

var el = document.createdElement("span");
el.appendChild(document.createTextNode("texto do span"));
console.log(el);
container.appendChild(el);






