// só será executado se as duas variáveis forem verdadeiras (true)
var idade = 16;
var nome = "João";

if(nome == "João" && idade == 16) {
    console.log("O João pode entrar na aula");
} else {
    console.log("Este não é o João");
}


// Pode colcoar muitos &&, mas usa-se normalmente 2 ou 3
if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}


// Pode isolar operações entre parenteses
if((1 == 1 && 3 > 2) && true) {
    console.log("Passou");
} else if(nome === "João" && idade >= 14) {
    console.log("Aqui passa!");
}

