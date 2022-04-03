// Callback functions

function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, Callback) {
    var op = a + b;
    Callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);








