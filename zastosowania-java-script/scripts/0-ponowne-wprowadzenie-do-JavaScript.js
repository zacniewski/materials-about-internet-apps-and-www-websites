console.log("LICZBY");
var a = 0.1 + 0.2;
var b = 0.30000000000000004;
console.log(a==b);

console.log("sinus = ", Math.sin(3.5));
let r = 0.9;
var circumference = 2 * Math.PI * r;
console.log("circumference = ", circumference);

let l1 = parseInt('123', 10); // 123
let l2 = parseInt('011', 8); // 8 do 1 + 8 do 0 = 9
let l3 = parseInt('11', 2); // 3

console.log(l1);
console.log(l2);
console.log(l3);

console.log(+ '42');
console.log(+ '010');
console.log(+ '0x10'); // 16

var n = parseInt('hello', 10); // NaN
console.log("n = ", n);

var m = NaN + 5;
console.log("m = ", m);

console.log(isNaN(NaN));
console.log(1 / 0); //  Infinity
console.log(-1 / 0); // -Infinity

console.log(isFinite(1 / 0)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log();

console.log("STRINGS");
console.log('hello'.length);
console.log('hello'.charAt(0)); // "h"
console.log('hello, world'.replace('hello', 'goodbye')); // "goodbye, world"
console.log('hello'.toUpperCase()); // "HELLO"
console.log();

console.log("INNE TYPY");
console.log(Boolean('') );
console.log(Boolean(234));
console.log();


console.log("Zmienne".toUpperCase());

// mojaZmiennaLet *nie* jest tutaj widoczna 

for (let mojaZmiennaLet = 0; mojaZmiennaLet < 5; mojaZmiennaLet++) {
    // mojaZmiennaLet jest widoczna tylko tutaj
    console.log(mojaZmiennaLet);
  }
  
  // mojaZmiennaLet *nie* jest tutaj widoczna 
  //console.log(mojaZmiennaLet); //Uncaught ReferenceError: mojaZmiennaLet is not defined

const Pi = 3.14; // deklaruje zmienną Pi
// Pi = 1; // zwrócony zostanie błąd ponieważ nie można zmieniać zmiennej const

console.log();
console.log("Operatory".toUpperCase());
console.log('3' + 4 + 5);
