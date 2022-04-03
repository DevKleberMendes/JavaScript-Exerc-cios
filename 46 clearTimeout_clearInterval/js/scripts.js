// clearTimeout e clearInterval
// serve p encerrar o setTimeout e setInterval

// clearTimeout na prática (dentro de var p poder chamar e interrompela)

var x = 0;

var myTimer = setTimeout(function() {
    console.log("o x é 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("o x passou de 0");
}


// clearInterval na prática
var myInterval = setInterval(function() {
    console.log("Iprimindo interval");
}, 500);

setInterval(function() {
    console.log(" Não precisamos mais repetir!");
}, 1500);






