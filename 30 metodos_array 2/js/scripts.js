// Metodos de array2:

// splice (adiciona elemento no meio do array) ex entre o número 2 e 5
var arr = [1,2,3,4,5];
arr.splice(2, 0, 999);
// indice do array 2; exlui 0 (nenhum) e inclui o 999
console.log(arr);


// splice (removendo elemento no meio do array) ex retirar o 4
arr.splice(4, 1);
// indice 3 referente ao numero 4, soma mais 1 ao indice = indice +1
console.log(arr);


// indexOf (p saber o indice de um elemento do array) ex número 5 = 4 é seu indice no array
console.log(arr.indexOf(5));


// joim (transforma  array em string)
var arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" "));
// (" ") inclui espaço junto ao array p separar
console.log(arr2.join(","));
// (" ") inclui virgula junto ao array p separar


// reverse (inverte a sequencia de traz p frente)
console.log(arr2.reverse());

