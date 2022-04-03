// Utilizando o this
// fora do escopo se refere ao objeto global
// dentro de objetos se refere a instância e pode acessar suas propriedades

var teste = 5;

console.group(this);
console.log(this.teste);
console.log(teste);

let pessoa = {
    mome: "Klebber",
    idade: 37,
    falar: function() {
        console.log("Ola, tudo bem?");
    },
    dizerNome: function() {
        console.log("o meu nome é" + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    },
    saudacao: function() {
        return 'Sr. ' + this.mome;
    }
};

pessoa.dizerNome();
console.log(pessoa.idade);
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();

console.log("Ola" + sdc);


