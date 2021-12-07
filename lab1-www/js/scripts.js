/*!
Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
Copyright 2013-2021 Start Bootstrap
Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
console.log("Załączony skrypt działa");
//const name = prompt("Podaj swoje imię:");
//console.log(name);

const name = "Ala";

let name2 = "Marcin";
console.log(name2);

const liczba = 10;
console.log("Typ stałej liczba to", typeof liczba);


const dog = {
    name: "Szama",
    speed: 1000,
    showText() {
        return "Lubię walczyć ze złem";
    }
}

dog.type = "pies";
dog.legs = 4;
dog.eat = function() {
    return "Jem dobre rzeczy";
}

console.log(dog.name); //"Szama"
console.log(dog.speed); //1000
console.log(dog.showText());
console.log(dog["name"]);
console.log(dog.legs); //4
console.log(dog);

let guzik = document.getElementById("guziczek");
console.log(guzik); 
guzik.innerHTML = 1234;

let guziki = document.getElementsByClassName("btn-primary");
console.log(guziki);
guziki[0].style.color = "red"; // guziki[0] to pierwszy znaleziony element
guziki[1].style.color = "orange"; // guziki[1] to drugi znaleziony element

