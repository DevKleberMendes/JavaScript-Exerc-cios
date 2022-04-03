// Alterando o contéudo do elemento html usando (textContent e innerHTML)

// primeiro selecionando o elemento
var title = document.querySelector("#title");

// innerHTML (trocando o titulo h1 no site)
title.innerHTML = "Testando o texto alterado";

// textContent (recomendado)
var subtitle = document.querySelector(".subtitle");
console.lot(subtitle);
subtitle.textContent = "Testando o textContent";







