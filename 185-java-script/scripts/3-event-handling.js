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
alert('Kliknięto w przycisk!');
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
    alert('Kliknięto w przycisk!');
});
