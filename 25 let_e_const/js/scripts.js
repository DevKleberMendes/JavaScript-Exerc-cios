// Let e Const
// Let e var pode ter seu valor alterado mas const NÂO

// let no escopo global (coluna 1)
let x = 5; // mesma coisa que x = 5;

// mudando o valor de x no escopo global (coluna 1)
x = 12;

// mudando o valor de x no escopo local (coluna 2), usando if
if(true) {
    let x = 20;
    console.log(x);
}

// imprimindo dos os x
console.log(x);


// valor de x usando const. Se tentar atribuir novo valor a cost dará erro. Se usa para informações que n altera c frequência.
const y = 10;








