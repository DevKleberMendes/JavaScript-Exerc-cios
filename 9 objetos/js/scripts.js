var obj = {
    nome: "Kleber",
    idade: 37,
    profissao: "FrontEnd",
};

console.log(obj);
console.log(typeof obj);

// obs objeto sempre entre chaves
// obs objeto se separa com :
// obs objeto finaliza com vírgula


// Como acessar o contéudo do objeto? (variavel e seu nome com ponto entre elas)
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

// Concatenando
console.log("O meu nome é " + obj.nome);

// Auterando item do obj
obj.nome = "lindo";

// Incluindo item ao objeto
obj.graduacao = true;
