
if(true) {
    console.log("testando o if");
}


// O if vai executar o código se estiver como true (verdadeiro), se mudar p false ele pula o if e não executa

// Exemplo real - carteira de motorista
// o if só vai executar o código se o operador lógico/ condição for verdadeiro (idade > 18 ?), se sim executa se não igora

var idade = 16;
var idadeMinima = 18;
if(idade > idadeMinima) {
    console.log("Pode fazer CNH");
}

if(idade < idadeMinima) {
    console.log("Deve esperar ter 18 anos");
}
