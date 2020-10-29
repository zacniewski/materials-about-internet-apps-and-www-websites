/*
Tryb strict mode jest specjalnym trybem wprowadzonym w wersji ECMAScript 5, który zmienia
nieco zachowanie silnika JavaScript w pewnych sytuacjach. Tworząc nową aplikację, warto
stosować ten tryb, co pozwala uchronić nas przed wieloma prostymi błędami, które mogą być
jednocześnie trudne do zlokalizowania.

Aby włączyć ten tryb, wystarczy na początku skryptu lub funkcji zastosować oznaczenie:

"use strict"; // dla całego skryptu
function fn () {
    "use strict"; // tylko dla funkcji fn()
}
*/

/*
Przy aktywnym trybie ścisłym nie można używać zmiennych, które nie zostały wcześniej zade-
klarowane.
*/

let someText = "tekst";

function fn () {
    "use strict";
    someText = "185IC";
    console.log(someText);
}

fn();

/*
W funkcji fn próbujemy ustawić wartość dla zmiennej someText, lecz nigdzie wcześniej jej
nie deklarujemy. Gdyby nie było aktywnego trybu ścisłego, to w przeglądarce internetowej
zmienna ta zostałaby automatycznie zadeklarowana w zakresie globalnym, czyli byłaby dostępna
w obiekcie window:

window.someText

W związku z trybem ścisłym takie przypisanie jest niemożliwe i zostaje zgłoszony odpowiedni
błąd. Warto ograniczać wszelkie stosowanie zmiennych globalnych gdyż są one podatne na
konflikty w przypadku, gdyby inny skrypt czy funkcja również chciały stworzyć swoją zmienną
o tej samej nazwie, również w zakresie globalnym. Co więcej, warto pamiętać, że obiekt window
nie jest częścią samego standardu ECMAScript, lecz obiektem występującym w przeglądarkach
internetowych, przez co nie zawsze jest on dostępny (np. nie występuje w środowisku back-
endowym Node.js).
*/

/*
Bez aktywnego trybu ścisłego deklarując wiele parametrów funkcji, możemy przypadkiem dwu-
krotnie zadeklarować parametr o tej samej nazwie.
*/

function overrideParameters(a, b, c) {
    "use strict";
    console.log(a);
    }
overrideParameters(1, 2, 3);
