// Método dentro do objeto let
let pessoa = {
    mome: "Klebber",
    idade: 37,
    falar: function() {
        console.log("Ola, tudo bem?");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.mome);
// método = falar: function()

// visualizando o método "falar" dentro do objeto let "pessoa"
pessoa.falar();

// visualizando "soma" resultado de return que resulta em (2+2 = 4)
var soma = pessoa.soma(2, 2);
console.log(soma);


