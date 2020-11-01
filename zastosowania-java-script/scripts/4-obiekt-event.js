/*

Rejestrując nasłuchiwanie na jakieś zdarzenie, często będziemy musieli również pobrać parame-
try tego zdarzenia, takie jak pozycja myszki, referencja do elementu, na którym wystąpiło
zdarzenie itp. W tym celu możemy wykorzystać specjalny obiekt 'event', który jest para-
metrem każdej funkcji uruchamianej jako obsługa zdarzenia
*/

const btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    console.log(event.target.textContent);
});

/*
Tym razem nasza funkcja, będąca drugim parametrem metody addEventListener , wykorzystuje
obiekt event. Oczywiście jego nazwa może być dowolna, ale przyjęło się, że najczęściej jest tu
stosowana pojedyncza litera e lub właśnie słowo event. Jest to jednak tylko nieobligatoryjna
konwencja.
Co zawiera taki obiekt? Otóż całkiem sporo ciekawych parametrów, wśród których znajduje
się np. pole target. Przechowuje ono referencję do elementu, na którym zostało wykryte
dane zdarzenie; u nas jest to zdarzenie click. Istnieje również pole o nazwie currentTarget,
lecz omówimy je dokładniej w dalszej części rozdziału, gdy będziemy analizować problem
tzw. propagacji zdarzeń. Na razie w zupełności wystarczy nam pole target.
Skoro jest to referencja do klikniętego elementu, to — jak każda referencja DOM — posiada
również pole textContent, które w tym przypadku zawiera po prostu treść napisu widniejącą na
przycisku <button>. Gdy uruchomimy ten kod w przeglądarce, to po kliknięciu przycisku
w konsoli zobaczymy napis z guzika
*/

/*
Dysponując referencją do elementu, możemy
zmieniać również inne jego parametry, np. zmieńmy po kliknięciu tło przycisku z domyślnego
szarego na kolor czerwony:
*/

const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', event => {
    event.target.style.backgroundColor = 'red';
});

/*
Załóżmy, że chcemy wyświetlić
na ekranie czerwony prostokąt i analizować położenie myszki po kliknięciu go:
*/

const box = document.getElementById('box');
box.addEventListener('click', e => {
    console.log(`Pozycja myszki: ${e.clientX}, ${e.clientY}`);
});

/*
Delegowanie zdarzeń
W niektórych sytuacjach będziemy chcieli analizować zdarzenia dla wielu elementów zawartych
w jakimś elemencie nadrzędnym. Załóżmy na przykład, że mamy listę elementów <li>
i chcemy nasłuchiwać na kliknięcie każdego z nich, aby pobrać jego wartość textContent
i wstawić w miejsce elementu <span>:
*/

/*
Zadanie to moglibyśmy wykonać na kilka sposobów. Możemy np. pobrać kolekcję referencji do
wszystkich elementów <li> zawartych w elemencie o identyfikatorze list i przypisać do nich
funkcję obsługującą zdarzenie click. W tym celu możemy wykorzystać metodę forEach,
pozwalającą na iterację po całej kolekcji, a dla każdego elementu musielibyśmy wywołać
metodę addEventListener.

Istnieje jednak inny sposób, określany często jako delegacja zdarzeń. Polega to na zarejestrowa-
niu obsługi danego zdarzenia dla rodzica elementów, które nas interesują, i analizowaniu
rodzaju elementu, na którym to zdarzenie wystąpiło:
*/

const selected = document.getElementById('selected');
const list = document.getElementById('list');
list.addEventListener('click', e => {
    const el = e.target;
    selected.textContent = el.nodeName === 'LI' ? el.textContent : '';
});

/*
W tym przykładzie metodę addEventListener wywołaliśmy dla elementu <ul>, a następnie
sprawdzaliśmy, czy kliknięty element znajdujący się wewnątrz tej listy jest elementem <li>.
W ten sposób uniknęliśmy potrzeby iterowania po wszystkich elementach listy i rejestro-
wania obsługi zdarzenia dla każdego z nich oddzielnie. Ponadto takie rozwiązanie pozwala
nam obsługiwać zdarzenie click również dla elementów listy, które mogłyby zostać stworzone
dynamicznie w czasie działania aplikacji.
*/



