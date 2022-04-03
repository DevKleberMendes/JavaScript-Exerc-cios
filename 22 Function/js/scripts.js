// são blocos de códigos reutilizáveis p n ter q repetir o código em varias partes do ...
// ... projeto e assim dificultando possíveis mudanças e manutenções
// a função precisa ser invocada p ser executada

// Ex função  1
function primeiraFuncao() {
    console.log("Hello word das funções");
}
// Executando ou invocando a função 1
primeirafuncao();


// Ex função 2 - incluindo argumento "nome" na função
// argumento nome
function dizerNome(nome) {
    console.log("O nome é: " + nome);
}
// Executando ou invocando a função 2 e informando o argumento nome
dizerNome("Klebber");
dizerNome("Paulo");


// Ex função 3 - colocando var dentro da fução
var nomeDoBandoDeDados = "Nick";
// Executando ou invocando a função 3 com var
dizerNome(nomeDoBandoDeDados);


// Ex função 4 - com mais de um argumento ( a , b)
function soma(a, b) {
var soma = a + b;
return soma;
}
// Executando ou invocando a função 4 com mais de um argumento
var somaUm = soma(2, 5);
console.log(somaUm);


// Ex função 5 - com mais de um argumento ( a , b)
var somaDois = soma(5, 5);
// Executando ou invocando a função 5 com mais de um argumento
console.log(somaDois);


// Ex função 6 - com mais de um argumento ( a , b)
console.log(soma(4, 5));