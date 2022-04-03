// Funções de string (caixa alta ou caixa baixa ou mudar string para array)

// toLowerCase (muda primeira letra p minuscula)
var frase = "Esta frase esta teste esta";
console.log(frase.toLowerCase());

// toUpperCase (toda a frase em maiusculo)
var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);

// trim (para retirar espaços em excesso na frase)
var nome = "       Klebber          ";
var nomeTrim = nome.trim();
console.log(nomeTrim);

// split (enviar texto como array - em lista separado só com espaço em branco)
console.log(frase.split(" "));
// ou separado somente por espaço em branco e virgula
console.log(frase.split(", "));

// IndexOf (procura a primeira palavra desejada "esta" na frase)
console.log(frase.IndexOf("esta"));

// lastIndexOf (procura a ultima palavra desejada "esta" na frase)
console.log(frase.lastIndexOf("esta"));















