// (||) retorna verdadeiro (true) caso uma das operações retorne verdadeiro
// ele retorna false apenas se as duas expressões forem falsas

var idade = 16;
var nome = "João";

if(nome == "João" || idade == 14) {
    console.log("O João pode entrar na aula");
} else {
    console.log("Não pode enetrar");
}



// Outro exemplo
if(nome == "Pedro" && 15 > 20 || 10 == 10) {
    console.log("Testando");
}


// Outro exemplo isolando entre mais 1 parenteses
// lembrando que && exige 2 verdades nos dois lados
if((nome == "Pedro" || 15 > 20) && 10 == 10) {
    console.log("Testando");
} else {
    console.log("Não entrou");
}
