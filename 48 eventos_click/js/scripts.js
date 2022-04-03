// Eventos click
// ativado qd usuário clica em certo elemento 

// inserir click
var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function() {
    console.log("cliclou");
    console.log(this);
    this.style.color = "red";
});

var title = document.querySelector("#title");
title.addEventListener("click", function() {
    console.log("teste");
});




