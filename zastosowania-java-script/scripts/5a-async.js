/*
Technologia Ajax

Obecnie w większości aplikacji dąży się do tego, aby możliwie w jak najmniejszym stopniu
blokować interfejs aplikacji dla użytkownika. Wiele stron wymaga jednak komunikacji z serwe-
rem, np. w celu wysłania formularza, pobrania dodatkowych danych itp. Dawniej wysłanie
formularza powodowało najczęściej całkowite przeładowanie strony, co nie było komfortowe dla
użytkowników, gdyż zmuszało ich do długiego czekania na otrzymanie oczekiwanej treści stro-
ny. Dziś w wielu aplikacjach wyraźnie rozdziela się tzw. back-end i front-end. Często mówi
się o aplikacjach SPA (Single Page Application), które dane otrzymują z API typu Rest czy
GraphQL. Takie podejście ma wiele zalet, ale do wykonania tego typu aplikacji potrzebne jest
jakieś rozwiązanie do komunikacji strony z serwerem w celu pobrania tylko tych danych,
które są w danej chwili potrzebne.

Załóżmy na przykład, że tworzymy stronę z artykułami. Po wejściu na stronę chcemy pokazać
użytkownikowi treść artykułu, dlatego zostanie ona pobrana z serwera jako pierwsza. Na stronie
ponadto prawdopodobnie będziemy mieli również dodatkowe treści, jak linki do innych
proponowanych artykułów, informacje o reklamach itp. Treści te nie są jednak krytyczne
dla pierwszego wczytania strony i mogą zostać pobrane w drugiej kolejności, gdy użytkownik
będzie już czytał artykuł. W tym celu możemy wykorzystać technologię Ajax, pozwalającą
na przesłanie do serwera odpowiedniego żądania (request) i oczekiwanie na otrzymanie od-
powiedzi (response), która obecnie najczęściej występuje w formacie JSON. Takich zapytań
możemy wykonywać wiele, na przykład osobne zapytanie w celu pobrania listy innych pro-
ponowanych użytkownikowi artykułów i osobne dla poszczególnych bloków reklamowych
umieszczonych na stronie.

Dzięki temu strona może być dynamicznie aktualizowana o odpowiednie treści w miarę ich
dostarczania z serwera. Umożliwia nam to precyzyjne określenie, kiedy chcemy zacząć pobierać
dodatkowe treści, na przykład dopiero w momencie, gdy użytkownik znajdzie się w określonym
miejscu na stronie.

Innym przykładem wykorzystania technologii Ajax są formularze. Już nawet w najprostszym
formularzu do rejestracji użytkownika może być wiele miejsc, które wymagają dynamicznej
komunikacji z serwerem. Załóżmy, że użytkownik musi wypełnić dwa pola: Adres e-mail
oraz Proponowane hasło. Gdy wprowadzi adres e-mail i zacznie wpisywać hasło, możemy wysłać
do serwera zapytanie, czy taki użytkownik istnieje już w bazie, i jeśli tak, to wyświetlić sto-
sowny komunikat. Może przy dwóch polach formularza nie jest to konieczne, lecz gdyby użyt-
kownik musiał wypełnić dodatkowo kilka innych pól, to taka informacja mogłaby być dla
niego przydatna.

Gdy wprowadzi wszystkie dane i kliknie przycisk Zarejestruj, możemy wysłać do serwera
wprowadzone przez niego dane i oczekiwać na odpowiedź, która może być pozytywna, gdy
uda się zarejestrować użytkownika, lub negatywna, gdy z jakichś powodów operacja ta nie doj-
dzie do skutku. W trakcie przetwarzania zapytania przez serwer często na stronach wyświe-
tla się dla użytkownika stosowną informację słowną lub w formie tzw. loaderów czy spinnerów
(najczęściej w formie animowanych elementów graficznych). W tym czasie użytkownik
może jednak swobodnie przeglądać pozostałą część strony.

Technologia Ajax opiera się generalnie na obsłudze obiektu XMLHttpRequest (nazywanego
często w skrócie XHR), który pozwala wysyłać zapytania do serwera i oczekiwać na odpowiedź
w celu wykonania odpowiedniej akcji. Istnieją również inne technologie, np. WebSocket,
która jest używana, gdy potrzebujemy ciągłej komunikacji dwukierunkowej (np. w przypadku
chatu internetowego), czy Server Send Event (SSE), która pozwala na wysyłanie wielu danych
z serwera w celu stopniowego wypełniania strony odpowiednią treścią. W tym poradniku
skupimy się jednak tylko na technologii Ajax w jej podstawowym rozumieniu, wykorzystującym
obiekt XHR. Omówimy dwie najczęściej stosowane metody pracy z tym obiektem poprzez
wykorzystanie natywnej metody fetch, dostępnej w nowoczesnych przeglądarkach, oraz bardzo
popularnej biblioteki axios. Na koniec spróbujemy samodzielnie obsłużyć połączenie przy
wykorzystaniu obiektu XMLHttpRequest, co pozwoli zrozumieć, w jaki sposób działają ze-
wnętrzne biblioteki do pracy z Ajax. 

Zanim jednak przejdziemy do wykorzystania tej technologii
w praktyce, przypomnimy sobie kilka podstawowych rzeczy o komunikacji serwer – klient.
W pracy z API wykorzystujemy różne metody http. Najczęściej używana jest metoda GET,
służąca do pobierania określonych danych. Ewentualne parametry przesyłane są bezpośrednio
w adresie URL w formie tzw. path-params lub query-params. Często spotkamy się także
z metodami POST, PUT czy DELETE. Każda z nich ma swoje zastosowanie. Metody POST będziemy
używali w celu stworzenia jakichś zasobów, na przykład wysłania nowego formularza do jego
zapisu. Z kolei metody PUT można użyć do aktualizacji zasobu, który już istnieje. Metodę
DELETE, jak wskazuje jej nazwa, wykorzystamy do usunięcia określonych zasobów.

Załóżmy, że tworzymy aplikację pozwalającą kupować różne przedmioty, czyli typowy sklep
internetowy. Zapytanie GET możemy wykorzystać w celu pobrania pojedynczego przed-
miotu, np.: 

GET /item/item-title

gdzie szukany tytuł artykułu podajemy w formie path-param, dzięki czemu uzyskujemy tzw.
adres przyjazny dla użytkownika. Czasami zdarza się, że pojedyncze zasoby (np. artykuł, pro-
dukt w sklepie itp.) pobierane są poprzez podanie ich identyfikatora (/item/123), lecz jest to
zapis mniej wygodny dla użytkowników.

Inne zapytanie GET moglibyśmy wykorzystać np. w wyszukiwarce. Gdy użytkownik uzupełni
wszystkie preferencje wyszukiwania, nasze zapytanie mogłoby wyglądać tak:

GET /items?category=agd&priceMax=200

W tym przypadku parametry wyszukiwania umieściliśmy w sekcji query-params, określając
pożądaną przez użytkownika kategorię produktów oraz cenę maksymalną.
Załóżmy, że użytkownik zdecydował się na zakup i klika na stronie przedmiotu Kup przedmiot.
Prawdopodobnie przeszedłby w tym momencie na kolejną stronę, na której musiałby uzupełnić
dane niezbędne do zrealizowania zamówienia, jak adres dostawy, dane kontaktowe, metoda
płatności itp. Gdy poda wszystkie dane i kliknie Zapłać, możemy wykorzystać zapytanie typu
POST, aby przesłać wypełniony formularz na serwer w celu jego weryfikacji i umożliwienia
rozpoczęcia płatności:

POST /create-purchase
{address: { ... }, phone: ..., selectedPaymentMethod: { ... }}

Użyliśmy zapytania na adres /create-purchase, lecz tym razem dane przekazujemy w tzw.
body zapytania, a nie bezpośrednio w adresie. Pozwala to na przekazanie dużo większych zaso-
bów niż zapytania GET i w wygodnej formie JSON, prostej do analizy zarówno po stronie
użytkownika, jak i na serwerze.

Gdybyśmy chcieli zapisywać formularz na bieżąco, gdy użytkownik wypełnia kolejne pola,
to w celu stworzenia zasobu pierwszy raz moglibyśmy użyć zapytania POST, a w celu kolejnych
aktualizacji zapytania PUT:

PUT /update-purchase/purchase-id
{ dane do aktualizacji }

Aby nasz sklep mógł funkcjonować, potrzebny będzie również panel administracyjny, w którym
uprawnione osoby mogą dodawać nowe czy usuwać istniejące ogłoszenia oraz je modyfikować.
W celu usunięcia produktu możemy wykorzystać zapytanie typu DELETE:

DELETE /delete-item/item-id

W praktyce jednak rzadko taka operacja dokona faktycznego usunięcia rekordów np. z bazy da-
nych. Najczęściej wykonuje się tzw. soft-delete, czyli zmienia się tylko np. status danej oferty
z active o wartości true na false, co powoduje usunięcie jej z widoku na stronie. W rzeczywistości
jednak oferta dalej istnieje w bazie danych, co pozwala np. bezproblemowo powiązać ją z histo-
rycznymi zakupami czy tworzyć analizy statystyczne.

Dochodzimy tu do istotnej kwestii: to, jakiej metody użyjemy, jest tak naprawdę tylko konwen-
cją. Teoretycznie moglibyśmy wykorzystać metodę POST w celu pobrania istniejących zaso-
bów, przekazując np. tytuł szukanego przedmiotu w body zapytania. Tak samo moglibyśmy
zastosować zapytanie GET, które powodowałoby usunięcie zasobu z bazy danych. Byłoby to
jednak bardzo złą praktyką. Zawsze należy rozsądnie dobierać metody http do przeznaczenia
danego adresu zapytania (tzw. endpointu).
*/

/*
Ajax i metoda fetch

Metoda fetch jest dostępna natywnie w większości przeglądarek internetowych. 
Wyjątek stanowi np. Internet Explorer. W tym poradniku nie analizujemy
dostępności poszczególnych metod i funkcji w różnych środowiskach, ale w rzeczywistych apli-
kacjach. Zachęcam Cię, abyś pamiętał o takiej weryfikacji (np. na stronie https://caniuse.com)
i zadbał o dostarczenie w razie potrzeby odpowiedniej implementacji zamiennej (tzw. polyfill).
Metoda fetch przyjmuje dwa parametry. Pierwszy określa adres pożądanego zasobu, a drugi,
opcjonalny, pozwala zdefiniować różne dodatkowe parametry, jak nagłówki, dane przeka-
zywane jako body do zapytania itp. Ich użycie jest zależne od ustawień konkretnego endpointu
na serwerze, dlatego w razie potrzeby należy je zawsze konfigurować zgodnie z wymaga-
niami API.

Metoda zwraca obietnicę, która w przypadku rozwiązania pozytywnego zawiera dane zwrócone
z serwera. Rozważmy najprostszy przypadek wykorzystania metody fetch z zapytaniem typu GET:
*/

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(userData => console.log("Fetch example nr 1:", userData.name)) // "Leanne Graham"

// Ex. 1 - fetch
let url_user_2 = 'https://jsonplaceholder.typicode.com/users/2';

async function fetch_example_2(url) {
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
    console.log("Status = ", response.status);
    // get the response body (the method explained below)
    let json_obj = await response.json();
    let city = json_obj.address.city;
    console.log("City of user: ", city);
    } 
    else {
        console.log("HTTP-Error: " + response.status);
    }
}

fetch_example_2(url_user_2);

// ex. 2 z "czystą" składnią obiektu Promise (API Githuba)
let url_of_commits = 'https://api.github.com/repos/zacniewski/materials-about-internet-apps-and-www-websites/commits';

fetch(url_of_commits)
  .then(response => response.json())
  //.then(commits => console.log("Commits: ", commits[0]));
 .then(commits => console.log("Autor commitów: ", commits[0].author.login));


// odpowiedź tekstowa zamiast JSON
async function fetch_example_3(url) {
    let response = await fetch(url);
    let text = await response.text(); // read response body as text

    console.log(text.slice(0, 100) + '...');
}

fetch_example_3(url_of_commits);

// fetch i Blob
let django_image_url = 'https://upload.wikimedia.org/wikipedia/commons/8/85/Django_Reinhardt_and_Duke_Ellington_%28Gottlieb%29.jpg';

async function blob_example(image_url) {

    let response = await fetch(image_url);
    let blob = await response.blob(); // download as Blob object
    
    // create <img> for it
    let img = document.createElement('img');
    img.style = 'position:fixed;top:10px;left:10px;width:200px';
    document.body.append(img);

    // show it
    img.src = URL.createObjectURL(blob);

    setTimeout(() => { // hide after five seconds
        img.remove();
        URL.revokeObjectURL(img.src);
    }, 5000);
}

document.getElementById("blob_example").addEventListener("click", function() 
    { blob_example(django_image_url); } 
    );

// Callback example
function sumTable(tab, fn) {
    let sum = 0;
    for (let i=0; i<tab.length; i++) {
        sum += tab[i];
    }
    fn(sum);
}

/*
// wynik w konsoli
sumTable([1,2,3,4], function(res) {
    console.log("Suma liczb w tablicy to: " + res);
});
*/

// wynik w konsoli po kliknięciu w guzik
document.getElementById("callback_example").addEventListener("click", function() 
    { sumTable([1,2,3,4], function(res) {
        console.log("Suma liczb w tablicy to: " + res);
        document.getElementById("callback_paragraph").innerHTML = "Suma liczb: " + res;
        }); 
    } 
    );

// "czysty" fetch do pobierania danych
fetch("https://restcountries.eu/rest/v2/name/Poland")
    .then(response => response.json())
    .then(response => {
        console.log("Polska z fetch: ", response);
        let nazwa = response[0].name;
        let region = response[0].region;
        let lat = response[0].latlng[0];
        let result = `${nazwa} is in ${region} and has latitude equal to ${lat}.`
        console.log("Info about country: ", result);
    })

// AJAX
let url_user_4 = 'https://jsonplaceholder.typicode.com/users/4';
let xhr = new XMLHttpRequest();

xhr.open('GET', url_user_4);

xhr.responseType = 'json';
xhr.send();

xhr.onload = function() {
  let responseObj = xhr.response;
  let name = responseObj.name;
  console.log("AJAX example - user name: ", name); // "Patricia Lebsack"
};

// callback - funkcja anonimowa 
function printText(el) {
    console.log("printText:", el);
}

[1,2,3,4].forEach(printText);


// axios

// Make a request for a user with a given ID
axios.get(url_user_2)
  .then(function (response) {
    // handle success
    let username = response.data.name;
    let phone = response.data.phone;
    console.log(`axios user ${username} has phone number ${phone}.` );
  })
  .catch(function (error) {
    // handle error
    console.log("axios user 2: ", error);
  })
  .then(function () {
    // always executed
  });

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
    try {
      const response = await axios.get(url_user_4);
      let user_name_4 = response.data.name;
      console.log("axios user 4: ", user_name_4);
    } catch (error) {
      console.error("axios user 4: ",error);
    }
  }

  getUser();