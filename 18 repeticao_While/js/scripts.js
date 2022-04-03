// depende de uma condição para repetir inumeras vezes (while e for)
// While = enquanto
//obs. cuidado com loop infinito

var x = 0;

while(x < 5) {
    console.log("Testando repetição" + x);

    // incrementador p somar x+1 e não cair no loop
    x++; // ou i += 1;

}


// Testando while com array (lista)

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3) {
    console.log(arr[y]);

    // incrementador p somar y+1 e não cair no loop
    y++; // ou i += 1;
}

