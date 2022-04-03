// Funções de string (toUpperCase, toLowerCase e length)

// length (quantidade de caracteres que string possui)
var nome = "Klebber";
console.log(nome.length);
// ou
var obj = "bola";
console.log(obj.length);


// indexOf fala o indice do caractere ex [2]
console.log(nome[2]); // resulta letra e (do nome Kleber)
// ou
var frase = "Eu vou mudar de vida";
console.log(frase.indexOf("mudar")); // resulta 7 (posição 7 na contagem de caracteres da frase)


// slice (para retirar parte "Eu" do texto)
var roeu = frase.slice(1, 3); // (1, 3) indice de "Eu" + 1 na frase
console.log(frase);


// replace (p trocar uma palavra "vou" para "Quero" na frase)
var novaFrase = frase.replace("vou", "Quero");
console.log(novaFrase);









