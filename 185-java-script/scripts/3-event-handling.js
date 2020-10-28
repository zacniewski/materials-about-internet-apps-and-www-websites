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

/*
Oczywiście w tych przypadkach mogliśmy równie dobrze stworzyć po prostu jedną funkcję,
która wywoływałaby dwa razy metodę console.log. W dużych aplikacjach zdarza się jednak,
że jakieś zdarzenie dla danego elementu chcemy obsługiwać w dwóch zupełnie różnych
miejscach w kodzie. 

Załóżmy na przykład, że tworzymy aplikację, która w nagłówku posiada
logo jako element o określonym identyfikatorze. Następnie w dwóch różnych miejscach
chcemy nasłuchiwać na kliknięcie tego logo. Gdybyśmy stosowali bezpośrednie przypisywanie
funkcji do właściwości onclick, to moglibyśmy przypadkowo nadpisać inną funkcję, która
mogłaby być zaimplementowana np. przez innego programistę. 

Zastosowanie metody addEventListener chroni nas przed takim niekontrolowanym nadpisywaniem funkcji obsługi
zdarzeń, a ponadto pozwala w prosty sposób usunąć konkretne zarejestrowane funkcje dla danego
zdarzenia, gdy nie są już potrzebne, bez wpływu na pozostałe.
*/

/*
Czasami będziemy chcieli mieć również możliwość rezygnacji z nasłuchiwania na jakieś
zdarzenie. Załóżmy na przykład, że chcemy nasłuchiwać tylko na pierwsze kliknięcie naszego
przycisku, a każde kolejne ignorować. Możemy w tym celu wykorzystać metodę removeEventListener, 
lecz aby z niej skorzystać, musimy funkcję obsługującą to zdarzenie podać właśnie
jako referencję:
*/

const btn4 = document.getElementById('btn4');
function clickHandler() {
    console.log('Kliknięto raz w przycisk btn4!');
    btn4.removeEventListener('click', clickHandler);
    console.log('Usunięta obsługa kliknięcia w btn4!');

}
btn4.addEventListener('click', clickHandler);

/*
Wewnątrz metody clickHandler wyświetlamy powiadomienie, a następnie odpinamy nasłuchi-
wanie na zdarzenie click dla tej konkretnej funkcji. Metoda removeEventListener musi zostać
wywołana dokładnie z tymi samymi parametrami co addEventListener.
*/

/*
Teoretycznie zawsze, gdy wiemy, że danego zdarzenia nie będziemy już potrzebowali, powinniśmy odłączyć
nasłuchiwanie na nie. W praktyce jednak można podejść do tego nieco swobodniej.
W naszym przykładzie nasłuchujemy na zdarzenia kliknięcia jakiegoś konkretnego przycisku.
Pamiętajmy jednak, że gdy strona zostanie przeładowana, a tym samym wczytamy na przykład
nowe skrypty JavaScript (np. po przejściu na inną podstronę), to wszystkie rejestratory zdarzeń
automatycznie są czyszczone. Co innego, gdy poruszamy się wewnątrz jednej strony, czyli
pracujemy z tzw. aplikacją SPA (Single Page Application). W tym przypadku warto w nieco bar-
dziej kontrolowany sposób przypinać i odpinać obsługę zdarzeń.


Są jednak przypadki, gdy warto zwrócić szczególną uwagę na odłączanie obsługi zdarzeń, gdy
nie są one już potrzebne. Może to być np. nasłuchiwanie na ruchy myszki, czyli zdarzenie
'mousemove'. Zdarzenie to jest uruchamiane przy każdym ruchu myszki, czyli praktycznie
przez większą część czasu, jaki użytkownik spędza na stronie. Event ten jest więc bardzo obcią-
żający dla komputera użytkownika, gdyż cały czas musi przetwarzać instrukcje zawarte w funkcji
obsługującej to zdarzenie. Może być ono wykorzystane na przykład na elementach canvas
do obsługi ruchu myszy i interaktywnego rysowania na stronie, czasami event ten jest też
wykorzystywany wraz z elementami svg (np. mapami) itp. W takich sytuacjach, gdy zdarzenie
nie jest już potrzebne, warto zadbać o jego wyrejestrowanie metodą removeEventListener,
co istotnie odciąży komputer użytkownika i przyspieszy działanie aplikacji.

Innym dość często obsługiwanym zdarzeniem jest 'scroll' , wywoływane, gdy użytkownik prze-
wija stronę w oknie przeglądarki. To zdarzenie w większości przypadków jest wykorzystywane
w aplikacji przez cały czas i często trudno byłoby znaleźć sensowny moment na jego wyrejestro-
wanie. Warto jednak zadbać o to, aby operacje wykonywane przy wykryciu takich zdarzeń
były możliwie jak najszybsze i najmniej skomplikowane.
*/