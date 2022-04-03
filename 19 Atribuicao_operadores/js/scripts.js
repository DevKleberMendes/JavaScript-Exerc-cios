//   +=
//   -=
//   *=
//   /=

var x =1;
var y = 2;

// soma
console.log(x = x + 1);
console.log(x += y);

// subtração
console.log(x -= y);

// multiplicação
console.log(x *= y);

// divisão
console.log(x /= y);

// loops
console.log(x++);
console.log(x--);

// loop com multiplicação
while(x <= 100) {
    console.log(x);

    x *= 2;
}

console.log(x);

// loop com subtração
 var j = 5;
 while(x > 0) {
     console.log(x);

     x -= j;
 }
