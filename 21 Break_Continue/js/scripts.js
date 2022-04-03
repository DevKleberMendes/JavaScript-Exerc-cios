// usado em loops:
// break para encerrar uma instrução
// continue para pular uma instrução

// Treiando break:
for(var i = 10; i > 0; i--) {
    
    console.log(i);

    if(i === 5) {
        break;
    }

}
console.log("Deu o break");



// Treinando o continue:
var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60) {
        console.log("CONTINUE");
        continue;
    }
     
    console.log("Testando continue");
}

