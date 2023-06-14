var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000


var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4


var somaString = '100' + 50; // 10050
var subtracaoString = '100' - 50; // 50
var multiplicacaoString = '100' * '2'; // 200
var divisaoString = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNaN = 'Isso é 100' / 2;

console.log(isNaN(testeNaN));

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1);


var x = 5;
console.log(x++); // 5
console.log(x); // 6

var x2 = 5;
console.log(++x2); // 6
console.log(x2); // 6
 