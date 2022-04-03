// Metodos de array:

// length (quantidade de elementos no array)
var arr = [1,2,3,4,5];
console.log(arr.length); // resulta 5

// push (adiciona elementos ao fim do array)
arr.push(6);
// ou adiciona frase ao fim do array
arr.push("Add qualquer coisa ao final");
console.log(arr);

// pop (remove elemento ao final do array)
arr.pop();
console.log(arr);

// unshift (inclui elemento ao começo)
arr.unshift(0); // inclui o 0 no começo

// shift (remove elemento do começo)
arr.shift();

// acessar o último elemento do array
// length = conta os elementos e -1 mostra o ultimo elmento
console.log(arr[arr.length - 1]);

// isArray (para saber se estamos trabalhando com array)
console.log(Array.isArray(5)); // resulta false pois é number
console.log(Array.isArray(arr)); // resulta true pois é array











