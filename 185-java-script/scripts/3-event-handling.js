/*
Zdarzenia w przeglądarce internetowej to czynności, które zostają wykonane w momencie
wywołania konkretnej akcji. Taką akcją, czyli zdarzeniem, może być np. kliknięcie przyci-
sku, wciśnięcie klawisza, ruch myszki po stronie, ale również akcje niezwiązane bezpośred-
nio z ingerencją użytkownika, jak wczytanie się obrazka, pobranie danych z serwera, zerwa-
nie połączenia internetowego itp.

Aby reagować na różne zdarzenia, należy wcześniej zarejestrować nasłuchiwanie na nie.
Istnieje kilka sposobów, aby to zrobić. Na początku przykład bazujący na obsłudze
zdarzeń bezpośrednio w kodzie HTML:
*/

function buttonClickHandler() {
console.log('Kliknięto w przycisk o id=guzik!');
}

/*
Aby przypisać jakąś funkcję do zdarzenia bezpośrednio w kodzie HTML, musimy przed nazwą
zdarzenia dodać przedrostek on, np. onclick, onmouseenter, onkeypress itp. 
*/

/*
Aby nasłuchiwać na jakieś zdarzenie z poziomu JavaScriptu, można wykorzystać metodę
addEventListener:
*/

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    console.log('Kliknięto w przycisk - addEventListener nr 1!');
});

/*
Każda referencja do elementu DOM posiada m.in. metodę addEventListener, służącą do rejestrowania
obsługi różnych zdarzeń.
Metoda ta przyjmuje dwa lub trzy parametry (trzeci, domyślnie o wartości false).

Najpierw musimy określić, na jakie zdarzenie chcemy nasłuchiwać. 
W naszym przypadku jest to kliknięcie przycisku, czyli zdarzenie
click. Zauważ jednocześnie, że tym razem nie stosujemy dodatkowego przedrostka on.

Drugim parametrem metody addEventListener jest funkcja, która zostanie wywołana po wykry-
ciu danego zdarzenia na wskazanym elemencie. Zastosowaliśmy tutaj zapis wykorzystujący
tzw. funkcje strzałkowe (arrow function). Nie musimy naszej funkcji definiować bezpośrednio
w definicji metody addEventListener; możemy w tym miejscu przekazać referencję do naszej
funkcji:
*/

const btn2 = document.getElementById('btn2');
function clickHandler() {
    console.log('Kliknięto w przycisk - addEventListener nr 2!');
}
btn2.addEventListener('click', clickHandler);

/*
Bezpośrednie przypisywanie funkcji obsługującej zdarzenie do pola w referen-
cji do elementu DOM może dawać czasami niespodziewane efekty. 
Problem ten rozwiązuje metoda addEventListener, która po wywołaniu kilka razy na tej samej referencji z tym samym
zdarzeniem nie spowoduje nadpisania, lecz dodanie kolejnych funkcji dla obsługi danego
zdarzenia. Zostaną one wywołane w takiej kolejności, w jakiej zostały zdefiniowane:
*/

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => console.log('Kliknięto w przycisk btn3'));
btn3.addEventListener('click', () => console.log('Druga funkcja dla zdarzenia click dla btn3'));
